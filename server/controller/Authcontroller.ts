import { Request , Response , NextFunction } from "express";
import {User} from "../model/user";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../model/user");

require("dotenv").config();

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
        res.status(201).json(newUser);

    }catch(err){
        console.log(err);
    }
}
