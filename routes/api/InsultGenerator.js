const getInsult = require("./ShakespearInsult");
const router = require("express").Router();

router.get("/", (req, res) => {
  let insult = getInsult();
  res.json(insult);
});

module.exports = router;
