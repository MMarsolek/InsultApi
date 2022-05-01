const getShakespeare = require("./ShakespearInsult");
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

router.get("/", (req, res) => {
  const insults = [getShakespeare, getModernInsult, getCompleteInsult];
  try {
    const insult = insults[Math.floor(Math.random() * insults.length)];
    res.status(200).send({ insult: insult() });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/*", (req, res) => {
  const insults = [getShakespeare, getModernInsult, getCompleteInsult];
  const insult = insults[Math.floor(Math.random() * insults.length)];
  res.status(404).send("Wrong route " + insult());
});

module.exports = router;
