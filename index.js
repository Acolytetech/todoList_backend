require('dotenv').config();
const express = require ("express");
const cors = require('cors')
const mongoose = require("mongoose");
const app = express()
const todoroutes = require("./routes/todoApi")

// server connect 
const port = process.env.port || 8080;
app.listen(port, ()=>{
    console.log(`server start on port ${port}`)
})

const DB = process.env.mongourl;

// mongodb connect 
async function mongodbconnection() {
    try{
        await mongoose.connect(DB);
        console.log(`database is connnected`)

    }
    catch (err){
        console.log('error connecting to the database');

    }

}
mongodbconnection();

app.use(cors())
app.use(express.json());
app.use('/todos' ,todoroutes);