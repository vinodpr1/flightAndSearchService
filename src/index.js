const express=require("express");

const {PORT}=require("./config/serverConfig.js");

const bodyParser = require("body-parser");

const {cityRepository}=require("./repository/index.js")

const setUpAndStartServer=()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async()=>{
         console.log("Server has Started on port no",PORT);
    })
}

setUpAndStartServer();