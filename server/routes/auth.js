import express from 'express';
const auth =express.Router();

auth.post('/register',(req,res)=>{
    res.send("Register")
})

export default auth;
