const express=require("express");

const app=express();

const {PORT}=require("./config/serverConfig.js")

const setUpAndStartServer=()=>{
    app.listen(PORT,()=>{
        console.log("App has started on PORT ",PORT);
    })
}

setUpAndStartServer();