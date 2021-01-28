const express = require("express");
const router = express.Router();
const { signup, signin, getAllUsers, updateUser } = require("../handlers/auth");

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/getAll", getAllUsers);

router.put("/updateUser", updateUser);

module.exports = router;
