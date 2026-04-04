import express from "express";
import  useGraph  from "./services/graph.servicesai.js"; 


const app = express();

app.get('/health', (req, res) => res.send('OK'));   

app.post('/use-graph', async  (req, res) => {

    const result =await useGraph("What is the capital of France?")
    res.json(result)
})

export default app