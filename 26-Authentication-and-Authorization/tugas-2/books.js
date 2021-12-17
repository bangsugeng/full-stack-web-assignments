const express = require("express")

const app = express()
const port = 4000

const books = [
  {
    "author": "Robert Martin",
    "country": "USA",
    "language": "English",
    "pages": 209,
    "title": "Clean Code",
    "year": 2008
  },
  {
    "author": "Dave Thomas & Andy Hunt",
    "country": "USA",
    "language": "English",
    "pages": 784,
    "title": "The Pragmatic Programmer",
    "year": 1999
  },
  {
    "author": "Kathy Sierra, Bert Bates",
    "country": "USA",
    "language": "English",
    "pages": 928,
    "title": "Head First Java",
    "year": 2003
  },
];

app.listen(port, () => console.log("is listening on port", port))