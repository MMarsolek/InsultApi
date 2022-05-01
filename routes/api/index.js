const router = require("express").Router();
const insult = require("./InsultGenerator");

router.use("/insults", insult);

module.exports = router;
