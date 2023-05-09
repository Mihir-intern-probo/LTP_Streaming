const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routes = require('./app/routes');
app.use(express.json());
app.get('/health',(req,res)=>{
    res.send("Running")
})

app.use("/api", routes);
dotenv.config()

const PORT = process.env.PORT;

app.get('/health',(req,res)=>{
    console.log("App is up and Running")
    res.send("App is up and Running")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running at 3000");
})
