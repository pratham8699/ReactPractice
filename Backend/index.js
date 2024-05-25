// const express = require("express");
import express from "express";
import { createTodo } from "./types.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
import { todo } from "./db.js";
console.log({ todo });
app.post("/todo", async function (req, res) {
  // console.log(req.body);
  const createpayload = req.body;
  console.log(createpayload);
  const parsepayload = createTodo.safeParse(createpayload);
  if (!parsepayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }
  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.status(200).json({
    message: "todo created",
  });
});
app.get("/todos", async (req, res) => {
  console.log(req.body);
  const todos = await todo.find();
  res.status(200).json(todos);
});
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsepayload.sucess) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    message: "Todo marked as completed",
  });
});
app.listen(4000, () => {
  console.log(`Server is up and running on port ${4000}`);
});
