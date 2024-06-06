const express=require("express");

const {City}=require("./models/index.js");
const cityRepository=require("./repository/citi-repository.js")


const {PORT}=require("./config/serverConfig.js");

const bodyParser = require("body-parser");

const setUpAndStartServer=()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,async()=>{
         console.log("Server has Started on port no",PORT)
    })
}

setUpAndStartServer();