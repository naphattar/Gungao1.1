import mongoose , {mongo, Schema}from "mongoose";

export interface User{
    username : string;
    password : string;
    highscore : number;
    token : string;
}

// Schema
const userSchema = new Schema<User>({
    username: {type:String ,default : null},
    password: {type: String , default : null},
    highscore: {type: Number , default : 0},
    token: {type: String}
});

module.exports = mongoose.model('users',userSchema);
