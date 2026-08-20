import express from "express";



const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello from backend");
    console.log("Hello from backend");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
