import mongoose , {mongo, Schema, Types} from "mongoose";
import { User } from "./user";

interface Topic{
    topicname : string;
    topicroomid : number;
    topicroommember : Types.DocumentArray<User>;
}

// Schema 

const topicSchema = new Schema<Topic>({
    topicname : {type : String , default : null},
    topicroomid : {type : Number , default : 0},
    topicroommember : [
        {
            username: {type:String ,default : null},
            password: {type: String , default : null},
            highscore: {type: Number , default : 0},
            token: {type: String}
        }
    ]
});

module.exports = mongoose.model('topics',topicSchema);