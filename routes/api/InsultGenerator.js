const getShakespeare = require("./ShakespearInsult");
const getModernInsult = require("./ModernInsult");

const router = require("express").Router();

router.get("/shakespeare", (req, res) => {
  let insult = getShakespeare();
  res.json(insult);
});

router.get("/modern", (req, res) => {
  let insult = getModernInsult();
  res.json(insult);
});

module.exports = router;
