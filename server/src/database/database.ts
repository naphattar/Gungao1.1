import mongoose, { ConnectOptions, mongo } from "mongoose";
const dotenv = require("dotenv");

dotenv.config();

// mock databaseurl untill find the way to use dotebv with typescript
const databaseUrl : string = "mongodb+srv://naphattar:raklungkeaw@gungao.x6oje7p.mongodb.net/?retryWrites=true&w=majority";
//const databaseUrl : string =   `${process.env.MONGO_URL}`||"mongodb+srv://naphattar:raklungkeaw@gungao.x6oje7p.mongodb.net/?retryWrites=true&w=majority";

exports.connect = () =>{
    console.log(databaseUrl);
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
