const express = require("express");
import { createTodo } from "./types";
const app = express();
app.use(express.json());
const { todo } = require("./db");
app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsepayload = createTodo.safeParse(createpayload);
  if (!parsepayload.sucess) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
  });
  res.json({
    message: "Todo created",
  });
});
app.get("/todos", async (req, res) => {
  const todos = await todo.find();
});
app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsepayload.sucess) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
});
