import { Register , Login  } from "../controller/Authcontroller";

const express = require("express");
const router = express.Router();

router.post("/register",Register);
router.post("/login",Login);

module.exports = router;