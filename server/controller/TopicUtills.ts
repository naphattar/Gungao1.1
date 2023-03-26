import { Topic } from "../interface/Topic";
const Topics = require("../model/topic");


const compareTopic = (a : Topic , b : Topic) : number =>{
    if(a.totalused > b.totalused){
        return -1;
    }
    if(a.totalused < b.totalused){
        return 1;
    }
    if(a.topicroomid < b.topicroomid){
        return -1;
    }
    return 1;
};

export const getAlltopics = async() : Promise<Topic[]> =>{
    try{
        const topics : Topic[] = await Topics.find();
        return topics;
    }catch(err : any){
        throw Error(err.response);
    }
};

export const sortTopics = (topics : Topic[]) : Topic[] =>{
    topics.sort(compareTopic);
    return topics;
};



