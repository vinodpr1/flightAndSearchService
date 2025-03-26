const express=require("express");
const bodyParser = require("body-parser");
const ApiRouter = require("./routes/index.js");

const dotenv=require("dotenv");
dotenv.config();

const setUpAndStartServer = ()=>{

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , ApiRouter);

    app.get("/",(req, res)=>{
      res.status(200).json({Health:"Health os okk of the Server"});
    })

    app.get("/shoes",(req, res)=>{
      res.status(200).json({Health:"Our shoes businessed is doing great"});
    })
    
    app.listen(3000 , async()=>{
         console.log("Server has Started on port no=> 3000");
    })
}

setUpAndStartServer();