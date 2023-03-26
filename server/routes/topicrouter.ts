const express  = require("express");
const router = express.Router();
import {addTopic, getTopicbyname, getTopics, increaseTopicused} from "../controller/Topiccontroller";

router.get("/",getTopics);
router.get("/:topicname" , getTopicbyname);
router.post("/create" , addTopic);
router.patch("/increase",increaseTopicused);


module.exports = router;