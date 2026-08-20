import express from "express";
import {connectDB} from "./utils/DB.js";

import dns from "node:dns/promises";
dns.setServers(['8.8.8.8', '1.1.1.1']);
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello from backend");
    console.log("Hello from backend");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
