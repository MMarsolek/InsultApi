const router = require("express").Router();
const insult = require("./InsultGenerator");

router.use("/insult", insult);

module.exports = router;
