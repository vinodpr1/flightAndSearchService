const express=require("express");
constbodyParser=require("body-parser")



const {PORT}=require("./config/serverConfig.js");
const bodyParser = require("body-parser");

const setUpAndStartServer=()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log("App has started on PORT ",PORT);
    })
}

setUpAndStartServer();