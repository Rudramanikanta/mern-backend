import express from "express";
import { Usermodel } from "../models/usermodel.js";

const router =express.Router()
router.post("/login",async (req,res)=>{
const {id,student}=req.body;
console.log(student)
const data=await Usermodel.find().lean();

res.json(data)
})
export {router as userRouter}