import { Request, Response , NextFunction } from "express";
import { Topic } from "../interface/Topic";
const Topics = require("../model/topic");


export const getTopicbyname = async (req : Request , res : Response) : Promise<void> =>{
    try{
        const topicname : string = req.params.topicname;
        if(!topicname){
            res.status(401).send({message : "Topicname not valid"});
            return;
        }
            const topic : Topic = await Topics.findOne({topicname});
            if(! topic){
                res.status(401).send({message : "This topic not existed"});
                return;
            }
            res.status(200).json(JSON.stringify(topic));
    }catch(err : any){
        res.status(500).send({message : err.response});
    }
};

export const addTopic = async(req : Request , res : Response): Promise<void>  =>{
    try{
        const topicname = req.body.topicname;
        const topicroomid = req.body.topicroomid;
        if(!topicname || !topicroomid){
            res.status(401).send({message : "Input is invalid"});
            return;
        }
        const topic : Topic = await Topics.findOne({topicname});
        if(topic){
            res.status(400).send({message : "This topic already existed"});
            return;
        }
        const newTopic : Topic = await Topics.create({
            topicname : topicname,
            topicroomid : topicroomid,
        })
        res.status(200).send({message : "Topic created"});
    }catch(err : any){
        res.status(500).send({message : err.response});
    }
}

