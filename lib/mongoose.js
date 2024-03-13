import mongoose from "mongoose";

export async function connectDb(){
    
    mongoose.set("strictQuery",true);
    try {
        await mongoose.connect("mongodb://localhost:27017");
        console.log("connected")
    } catch (error) {
        console.log(error);
    }
}
