const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Recycle", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});
let userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  phoneNumber: Number,
  point: Number,
  location: String,
  addMaterial: [{ type: String, quantity: Number }]
});
let Users = mongoose.model("users", userSchema);

let getRepo = cb => {
  // console.log("GET TASKS FROM DATABASE");
  Users.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    cb(docs);
  });
};

let registUser = (cb, obj) => {
  Users.insertMany(
    [
      {
        userName: obj.userName,
        email: obj.email,
        password: obj.password,
        phoneNumber: obj.phoneNumber,
        location: obj.location
      }
    ],
    function(err, newUser) {
      if (err) {
        console.log("err", err);
      }
      console.log("newUser:", newUser);
      cb(newUser);
    }
  );
};

let getUser = (cb, object) => {
  console.log("From Server", object.email);
  Users.findOne({ email: object.email, password: object.password }, function(
    err,
    docs
  ) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS FIND ONE:", docs);
    cb(docs);
  });
};

let addNew = (box, cb) => {
  Users.findOne({ _id: box.id }, function(err, docsFind) {
    if (err) {
      console.log("ERR:", err);
    }
    let y = {
      type: box.type,
      quantity: box.quantity
    };
    // delete box.id
    // console.log("JSON PARSE: ", JSON.stringify(y))
    docsFind.addMaterial.push(JSON.stringify(y));
    docsFind.save(function(err, docsSave) {
      if (err) {
        console.log("ERR:", err);
      }
      cb(docsSave);
    });
  });
};

module.exports = {
  Repo: getRepo,
  getUser: getUser,
  regist: registUser,
  addFun: addNew
};
