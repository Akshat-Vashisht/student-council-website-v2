import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
})

const Events = mongoose.models.Events || mongoose.model("Events",eventSchema);
export default Events;