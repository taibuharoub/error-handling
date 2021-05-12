const express = require("express");

const { getIndex } = require("../controllers/admin");
const router = express.Router();

router.get("/", getIndex);

module.exports = router;
