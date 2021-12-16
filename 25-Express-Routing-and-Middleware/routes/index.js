const express = require("express")

const hewanRouter = require("./hewan")

const router = express.Router()

router.use("/hewan", hewanRouter)

module.exports = router