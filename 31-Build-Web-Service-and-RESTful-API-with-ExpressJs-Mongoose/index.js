const express = require("express");
const router = require("./router/index")
const dotenv = require("dotenv");
dotenv.config();

const db = require("./helpers/db");

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;



async function main() {
      try {
            await db.openDBConnection(URI);
            const app = express();
            app.use(express.json())
            app.use(router)
            app.listen(PORT, (req, res) => {
                  console.log("Listening on Port", PORT);
            });
      } catch (error) {
            console.log("main:", error.message);
      }
}

main()