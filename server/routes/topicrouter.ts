const express  = require("express");
const router = express.Router();
import {addTopic, getTopicbyname, getsortedTopics, increaseTopicused} from "../controller/Topiccontroller";

router.get("/",getsortedTopics);
router.get("/:topicname" , getTopicbyname);
router.post("/create" , addTopic);
router.patch("/increase",increaseTopicused);


module.exports = router;