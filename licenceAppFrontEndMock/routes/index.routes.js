var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
// GET home page
router.get("/", async (req, res, next) => {
  res.render("index");
});

router.get("/client1", async (req, res, next) => {
  const {
    licencedUsers,
    unlicencedUsers,
    licenceCounter,
  } = await userController();

  res.render("client1", { licencedUsers });
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

async function userController() {
  let request = await fetch("http://localhost:1002/getallusers");
  let { licencedUsers, unlicencedUsers, licenceCounter } = await request.json();
  return {
    licencedUsers,
    unlicencedUsers,
    licenceCounter,
  };
}
