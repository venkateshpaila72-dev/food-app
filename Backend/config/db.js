import mongoose from "mongoose";

 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://foodapp:9640909635@cluster0.rxnxta9.mongodb.net/food-del').then(()=>console.log("Db connected"));
}