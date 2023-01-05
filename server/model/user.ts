import mongoose , {mongo, Schema}from "mongoose";

export interface User{
    username : string;
    password : string;
    token : string;
    _id : string;
}

// Schema
const userSchema = new Schema<User>({
    username: {type:String ,default : null},
    password: {type: String , default : null},
    token: {type: String}
});

module.exports = mongoose.model('users',userSchema);
