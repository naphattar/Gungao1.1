import mongoose , {mongo, Schema}from "mongoose";
import { User } from "../interface/User";



// Schema
const userSchema = new Schema<User>({
    username: {type:String ,default : null},
    password: {type: String , default : null},
    token: {type: String}
});

module.exports = mongoose.model('users',userSchema);

