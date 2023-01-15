import { Request , Response , NextFunction } from "express";
import {User} from "../model/user";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../model/user");

require("dotenv").config();

// A sub class of Express-request for authorizattion 
export interface getUserAuthInfoRequest extends Request {
    user: User // or any other type
}

export const Register = async(req : Request , res : Response) : Promise<any> =>{
    try{
        const username : string = req.body.username;
        const password : string = req.body.password;
        if(!(username && password)){
            res.status(401).send({message : "Please Enter Username and Password"});
            return;
        }
        const oldUser : User = await Users.findOne({username});
        if(oldUser){
            res.status(402).send({message : "This username already existed;"});
            return;
        }
        const encryptPassword : string = await bcrypt.hash(password,10);
        const newUser : User = await Users.create({
            username : username,
            password : encryptPassword
        });
        const token = jwt.sign(
            {
                user_id: newUser._id,
                username
            },
            process.env.TokenID,{
                expiresIn: "2h"
            }
        )
        
        newUser.token = token;
        res.header("authtoken", token).status(201);

    }catch(err){
        console.log(err);
    }
};

export const Login = async(req : Request , res : Response) : Promise<any> =>{
    try{
        const username : string  = req.body.username;
        const password : string  = req.body.password;
        if(!(username && password)){
            res.status(401).send({message : "Please Enter username and password"});
            return;
        }
        const user : User = await Users.findOne({username});
        if(user && await bcrypt.compare(password,user.password)){
            const token = jwt.sign(
                {
                    _id: user._id,
                    username
                },
                process.env.TokenID,
                {
                    expiresIn: "2h"
                }
            )
            user.token = token;
            res.header("authtoken", token).status(201).send({
                message : "Login passed",
                token : user.token,
                username : user.username
            });
        }else{
            res.status(402).send({
                message : "Invalid Login",
            });
        }
    }catch(err){
        console.log(err);
    }
};

export const verifyToken = (req : getUserAuthInfoRequest , res : Response , next : NextFunction) : any =>{
    const token = req.headers["authtoken"];
    if(!token){
        return res.status(403).send("Token not found");
    }
    try{
        const decoded = jwt.verify(token,process.env.TokenID);
        req.user = decoded;
        next();
        //res.status(201).send("Authorize Success");
    }catch(err){
        console.log(err);
        res.status(401).send("Invalid Token");
    }
    
};
