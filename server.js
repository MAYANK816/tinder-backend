import express from "express";
import mongoose from 'mongoose'
import Cards from "./dbCards.js";
import Cors from 'cors';

//App Config
const app=express();
const port=process.env.PORT||8001;
const connectionurl='mongodb+srv://admin:90uS0WGkWikJZ6xs@cluster0.awlkj.mongodb.net/tinderuserdb?retryWrites=true&w=majority';

//Middlewares
app.use(express.json());
app.use(Cors());

//Db config
mongoose.connect(connectionurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//API endpoints
app.get('/',(req,res)=>res.status(200).send("Hello Programmers"));
app.post('/tinder/card',(req,res)=>{
    const dbCard=req.body; 
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});
app.get('/tinder/card',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

//Listner 
app.listen(port,()=>console.log(`listening :${port}`));