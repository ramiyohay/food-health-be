const express = require("express");
const router = express.Router();
//const service = require("../services/payments-service");

/* GET payments quality check. */
router.get("/ping", async function (req, res, next) {
  res.status(200).send("PONG!");
});

module.exports = router;
