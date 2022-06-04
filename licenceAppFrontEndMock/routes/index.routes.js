var express = require("express");
var router = express.Router();

// GET home page
router.get("/", async (req, res, next) => {
  console.log("aight");
  let ok = "RENDER WORKS";
  res.render("index", { ok: ok });
});

router.get("/client1", async (req, res, next) => {
  console.log("aight");
  let ok = "RENDER WORKS";
  res.render("client1", { ok: ok });
});

router.get("/client2", async (req, res, next) => {
  console.log("aight");
  let ok = "CLIENT 2 PAGE";
  res.send({ ok: ok });
});

router.get("/client3", async (req, res, next) => {
  console.log("aight");
  let ok = "RENDER WORKS";
  res.render("index", { ok: ok });
});

module.exports = router;
