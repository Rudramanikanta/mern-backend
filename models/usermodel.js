import mongoose from "mongoose";
const userschema=mongoose.Schema(
    {
       username:{type:String},
       password:{type:String}
    },
    {timestamps:true,collection:"rudra"}
    )
export const Usermodel=mongoose.model("Course",userschema)