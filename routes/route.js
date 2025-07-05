const express = require("express");
const router = express.Router();
const {fetch} = require("../controllers/fetch")
const {upload} = require("../controllers/upload")
const {login} = require("../controllers/login")

router.post("/images", upload)

router.get("/images", fetch)

router.post("/login", login)

module.exports = router;