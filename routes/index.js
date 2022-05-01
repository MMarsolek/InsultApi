const router = require("express").Router();
const apiRoutes = require("./api");

const getShakespeare = require("./api/ShakespeareInsult");
const getModernInsult = require("./api/ModernInsult");
const getCompleteInsult = require("./api/CompleteInsult");

router.use("/api", apiRoutes);

const insults = [getShakespeare, getModernInsult, getCompleteInsult];

router.use((req, res) => {
  try {
    const insult = insults[Math.floor(Math.random() * insults.length)];
    res.status(200).send({ insult: insult() });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
