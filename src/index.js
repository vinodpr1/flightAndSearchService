const express=require("express");

const {PORT}=require("./config/serverConfig.js");

const bodyParser = require("body-parser");

const ApiRouter=require("./routes/index.js");


const setUpAndStartServer=()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRouter);
    
    app.listen(PORT,async()=>{
         console.log("Server has Started on port no",PORT);
    })
}

setUpAndStartServer();