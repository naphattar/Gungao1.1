import mongoose , {mongo, Schema, Types} from "mongoose";
import { Topic } from "../interface/Topic";


// Schema 

const topicSchema = new Schema<Topic>({
    topicname : {type : String , default : null},
    topicroomid : {type : Number , default : 0},
    totalused : {type : Number , default : 0}
});

module.exports = mongoose.model('topics',topicSchema);