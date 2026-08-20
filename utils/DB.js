import mongoose from "mongoose";
import dotenv from "dotenv";
// Source - https://stackoverflow.com/q/79873598
// Posted by Vin, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-21, License - CC BY-SA 4.0

import dns from "dns";
dns.setDefaultResultOrder("ipv4first");


dotenv.config();
export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    }
    catch (error) { 
        console.error("Error connecting to MongoDB:", error);   
        process.exit(1);
    }
}