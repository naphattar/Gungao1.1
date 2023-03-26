const express  = require("express");
const router = express.Router();
import {addTopic, getTopicbyname} from "../controller/Topiccontroller";

router.get("/:topicname" , getTopicbyname);
router.post("/create" , addTopic);
module.exports = router;