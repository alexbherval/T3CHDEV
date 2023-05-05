const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("ola sou checklis");
  res.send();
});

module.exports = router;
