const express = require("express")
const sessions = require("express-session")
const cookieParser = require("cookie-parser")

const ONE_MINUTE = 1000 * 60

const app = express()
const port = 8000

app.use("/login", express.static('views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser())

app.use(sessions(
  {
    secret: "7r(40mgwnf#5((9cs-_^y$!hs^n-+#o-q)(p&c(##n1ioc_#-&",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: ONE_MINUTE,
      sameSite: true
    }
  }
))

const myusername = 'user1'
const mypassword = 'mypassword'

let session;

app.get("/", (req, res) => {
  session = req.session
  console.log(session);
  if(session.userID) {
    const html = `
      <h1>Hello ${session.userID}, welcome</h1>
      <a href="/logout"><button>Logout</button></a>
    `
    res.send(html)
  } else {
    res.redirect("/login")
  }
})

app.post("/user", (req, res) => {
  const { username, password } = req.body;

  session = req.session
  if(session.userID) {
    const html = `
      <h1>Already logged in</h1>
      <a href="/"><button>Back to home</button></a>
    `
    res.send(html)
  } else {
    if(username === myusername && password === mypassword) {
      session.userID = username
      console.log(req.session);
      
      res.redirect("/")
    } else {
      const html = `
        <h1>Invalid username or password</h1>
        <a href="/"><button>Login</button></a>
      `
      res.status(401).send(html)
    }
  }

})

app.get("/logout", (req, res) => {
  req.session.destroy()
  res.redirect("/")
})

app.listen(port, () => console.log("server is listening on port", port))