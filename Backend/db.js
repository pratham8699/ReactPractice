const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pratham84540:K8O02J4IstVUL99u@cluster0.5yrnw5f.mongodb.net/"
);
const todoSchema = mogoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
