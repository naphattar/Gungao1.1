import mongoose, { ConnectOptions, mongo } from "mongoose";

require("dotenv").config();

const databaseUrl : string =   `${process.env.MONGO_URL}`;

exports.connect = () =>{

    //database connecting
    mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() =>{
        console.log("Database connection successfully");
    })
    .catch((err) =>{
        console.log("Database connection error");
        console.log(err);
        process.exit(1);
    })
};
