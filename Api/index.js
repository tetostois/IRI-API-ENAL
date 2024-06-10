import express from 'express'
import mongoose from 'mongoose';

const app=express();

app.listen(3000, ()=>{
    console.log('le serveur tourne sur le port 3000 !!')
})