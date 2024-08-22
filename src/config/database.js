import mongoose from "mongoose";

export const connect = async ()=>{
    await mongoose.connect('mongodb+srv://karanpodwal06:MLhJCBxGpnunAWel@cluster0.pfrbz.mongodb.net/');
    
}


