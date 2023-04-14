import { NextFunction , Request , Response} from "express";
import { getUserAuthInfoRequest, verifyToken } from "./controller/Authcontroller";
import { User } from "./interface/User";
const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const db = require("./database/database");
const Users = require("./model/user");
const userRouter = require("./routes/userrouter");
const topicRouter = require("./routes/topicrouter");


db.connect();

const app = express();

app.use(fileupload());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({extended : false}));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: 'authtoken',
};

app.use(cors(corsOptions));


app.get("/current", verifyToken, async (req : getUserAuthInfoRequest, res : Response)  => {
    try{

        let {_id} = req.user;
        const user : User = await Users.findOne({ _id: { $eq: _id }});
        res.status(201).send({
            username : user.username,
            token : user.token
        });
    }catch(err){
        console.log(err);
    }
});

app.use("/user",userRouter);
app.use("/topic",topicRouter);


module.exports = app;


