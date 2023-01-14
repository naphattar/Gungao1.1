import { NextFunction , Request , Response} from "express";
import { getUserAuthInfoRequest, Login, Register, verifyToken } from "./controller/Authcontroller";
import { User } from "./model/user";
const express = require("express");
const cors = require("cors")
const db = require("./database/database");
const Users = require("./model/user");
db.connect();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));

app.post("/register",Register);
app.post("/login",Login);

app.get("/current", verifyToken, async (req : getUserAuthInfoRequest, res : Response)  => {
    let {_id,username} = req.user;
    const user : User = await Users.findOne({ _id: { $eq: _id }});
    console.log("user is ",user);
    res.status(201).send(user);
});

  
module.exports = app;


