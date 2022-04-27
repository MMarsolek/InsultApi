const getShakespeare = require("./ShakespearInsult");
const getModernInsult = require("./ModernInsult");

const router = require("express").Router();

router.get("/shakespeare", (req, res) => {
  try {
    let insult = getShakespeare();
    res.status(200).send({ insult: insult });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/modern", (req, res) => {
  try {
    let insult = getModernInsult();
    res.status(200).send({ insult: insult });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
