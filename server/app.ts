import { Register } from "./controller/Authcontroller";

const express = require("express");
const db = require("./database/database");

db.connect();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post("/register",Register)

module.exports = app;


