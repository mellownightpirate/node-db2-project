const express = require("express");
const carRouters = require("./car-routers");

const router = express.Router();

router.use(carRouters);

module.exports = router;