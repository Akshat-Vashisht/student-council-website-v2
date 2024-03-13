import { connectDb } from "@lib/mongoose";
import Events from "../model/event.model"

export async function fetchEvents(){
    try {
        connectDb();
        const data = await Events.find();
        console.log("data",data)
        return data;
    } catch (error) {
        console.log(error)
    }
}