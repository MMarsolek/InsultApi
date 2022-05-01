const getShakespeare = require("./ShakespeareInsult");
const getModernInsult = require("./ModernInsult");
const getCompleteInsult = require("./CompleteInsult");

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

router.get("/complete", (req, res) => {
  try {
    let insult = getCompleteInsult();
    res.status(200).send({ insult: insult });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
module.exports = router;
