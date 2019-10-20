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
let tasksSchema = new mongoose.Schema({
  title: String
});
let Tasks = mongoose.model("tasks", tasksSchema);




module.exports = {
 
};
