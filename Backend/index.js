const express = require("express");
import { createTodo } from "./types";
const app = express();
app.use(express.json());
app.post("/todo",function(req,res){
    const createpayload = req.body;
    const parsepayload = createTodo.safeParse(createpayload);
    if(!parsepayload.sucess){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }



})
app.get("/todos",(req,res){

})
app.put("/completed", function(req,res){
    const updatePayload  = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsepayload.sucess){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }


})