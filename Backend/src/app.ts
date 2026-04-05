import express from "express";
import  useGraph  from "./services/graph.servicesai.js"; 
import { success } from "zod";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true,
    
}));

app.get('/health', (req, res) => res.send('OK'));   

app.post('/use-graph', async  (req, res) => {

    const result =await useGraph("What is the capital of France?")
    res.json(result)
})

app.post("/invoke" , async (req , res)=>{
    const {input}=req.body
    const result =await useGraph(input)
    res.status(200).json({
        message:"Graph invoked successfully",
        success:true,
        result
    })
})

export default app