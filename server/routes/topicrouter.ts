const express  = require("express");
const router = express.Router();
import {addTopic, getTopicbyname, getTopics} from "../controller/Topiccontroller";

router.get("/",getTopics);
router.get("/:topicname" , getTopicbyname);
router.post("/create" , addTopic);

module.exports = router;