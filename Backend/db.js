const mongoose = require("mongoose");
mongoose.connect(process.env.mongo_url);
const todoSchema = mogoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
