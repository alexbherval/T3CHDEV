const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("ola sou login");
  res.send();
});

module.exports = router;
