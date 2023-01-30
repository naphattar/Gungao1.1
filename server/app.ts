import { NextFunction , Request , Response} from "express";
import { getUserAuthInfoRequest, Login, Register, verifyToken } from "./controller/Authcontroller";
import { User } from "./model/user";
import { ServerToClientsEvents,InterServerEvents,SocketData, ClientToServerEvents } from "./interface/socketiointerface";
import { Server } from "socket.io";
const express = require("express");
const cors = require("cors");
const http = require("http");
const db = require("./database/database");
const Users = require("./model/user");

db.connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: 'authtoken',
};

// Initialize Socket.io for chat app
const socketio = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socketio.on("connection",(socket: { id: any; on: (arg0: string, arg1: () => void) => void; }) =>{
    console.log(`${socket.id} user just connected`);
    socket.on("disconnect",()=>{
        console.log("User is disconnected");
    })
})

app.use(cors(corsOptions));

app.post("/register",Register);
app.post("/login",Login);

app.get("/current", verifyToken, async (req : getUserAuthInfoRequest, res : Response)  => {
    let {_id,username} = req.user;
    const user : User = await Users.findOne({ _id: { $eq: _id }});
    res.status(201).send({
        username : user.username,
        token : user.token
    });
});

  
module.exports = app;


