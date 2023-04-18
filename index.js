import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import  mongoose  from "mongoose";
import {userRouter} from "./view/user.js"
const app=express();
app.use(cors())
app.get("/rudra",(req,res)=>{
res.send("hello rudra")
})
app.use(express.json())
app.use("/hello/",userRouter)
mongoose.connect("mongodb://localhost:27017/jlcdb",
{
    useUnifiedTopology:true,
    useFindAndModify:false,
    useNewUrlParser:true,
}
)
.then(
()=>{
    console.log("mongobd success")
},
(error)=>{
    console.log("connection error plz try once more")
    process.exit();
})
app.listen(3001,()=>{
    console.log("welcome user")
    console.log("localhost:3001/rudra")
})