const express = require("express");
const cors = require("cors");
const DB = require("./db");
const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// to run req.body
app.use(express.json());


app.get("/", (req, res) => {
  // let x = 2 * 2;
  res.json("server is working");
});
// Get all Database
app.get("/getdata", (req, res) => {
  DB.Repo(repo => {
    res.json(repo);
  });
});

app.post("/registration", (req, res) => {
  let box = req.body;
  console.log("box", box);
  DB.regist(x => {
    console.log("registration in server");
    res.json(x[0]);
  }, box);
});

app.post("/checkuser", (req, res) => { 
  let object = req.body;
  DB.getUser(repo => {
    res.json(repo);
  }, object);
});

app.put("/add", (req, res) => {
  let box = req.body;
  console.log("box:", box);
  DB.addFun(box, index => {
    res.json(index);
  });
});
app.get("/futher", (req, res) => {
  DB.Repo(repo => {
    res.json(repo);
  });
});

const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
