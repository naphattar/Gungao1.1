import { Request, Response , NextFunction } from "express";
import { Topic } from "../interface/Topic";
import { getAlltopics, sortTopics } from "./TopicUtills";

const Topics = require("../model/topic");


export const getsortedTopics = async(req : Request , res : Response) : Promise<void> =>{
    try{
        const topics = await getAlltopics();
        const sortedtopics = sortTopics(topics);
        res.status(200).json(sortedtopics);
    }catch(err : any){
        res.status(500).send({message : err.response});
    }
};

export const getTopicbyname = async (req : Request , res : Response) : Promise<void> =>{
    try{
        const topicname : string = req.params.topicname;
        if(!topicname){
            res.status(401).send({message : "Topicname not valid"});
            return;
        }
            const topic : Topic = await Topics.findOne({topicname : topicname});
            if(! topic){
                res.status(401).send({message : "This topic not existed"});
                return;
            }
            res.status(200).json(topic);
    }catch(err : any){
        res.status(500).send({message : err.response});
    }
};

export const addTopic = async(req : Request , res : Response): Promise<void>  =>{
    try{
        const topics = await getAlltopics();
        const topicname = req.body.topicname;
        const topicimageurl = req.body.imageurl;
        const topicroomid = topics.length+1;
        if(!topicname || !topicroomid){
            res.status(401).send({message : "Input is invalid"});
            return;
        }
        const topic : Topic = await Topics.findOne({topicname : topicname});
        if(topic){
            res.status(400).send({message : "This topic already existed"});
            return;
        }
        const newTopic : Topic = await Topics.create({
            topicname : topicname,
            topicroomid : topicroomid,
            imageurl : topicimageurl,
        })
        res.status(200).send({message : "Topic created"});
    }catch(err : any){
        res.status(500).send({message : err.response});
    }
}

export const increaseTopicused = async (req : Request , res : Response) =>{
    const topicroomid = Number.parseInt(req.body.topicroomid);
    if(!topicroomid){
        res.status(401).send({message : "Topicname is not valid"});
    }
    try{
        const topic : Topic = await Topics.findOne({topicroomid : topicroomid});
        const totalused = topic.totalused;
        await Topics.findOneAndUpdate({topicroomid : topicroomid},{totalused : totalused+1});
        res.status(200).send({message : "updated success"});
    }catch(err : any){
        res.status(500).send({message : err.response});
    }
}

