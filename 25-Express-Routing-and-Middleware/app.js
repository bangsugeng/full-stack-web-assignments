const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const router = require("./routes")

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

// middleware
const logger = (req, res, next) => {
  console.log("this is logger");
  next()
}

app.use(logger)

app.use(router)

app.listen(port, () => console.log("server is listening on port", port))