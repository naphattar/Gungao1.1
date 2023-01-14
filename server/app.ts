import { Login, Register } from "./controller/Authcontroller";

const express = require("express");
const cors = require("cors")
const db = require("./database/database");

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

module.exports = app;


