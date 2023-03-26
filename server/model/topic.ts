import mongoose , {mongo, Schema, Types} from "mongoose";

interface Topic{
    topicname : string;
    topicroomid : number;
    totalused : number;
}

// Schema 

const topicSchema = new Schema<Topic>({
    topicname : {type : String , default : null},
    topicroomid : {type : Number , default : 0},
    totalused : {type : Number , default : 0}
});

module.exports = mongoose.model('topics',topicSchema);