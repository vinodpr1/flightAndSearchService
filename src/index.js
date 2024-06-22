const express=require("express");

const {PORT}=require("./config/serverConfig.js");

const bodyParser = require("body-parser");
const ApiRouter = require("./routes/index.js");


const setUpAndStartServer = ()=>{

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api' , ApiRouter);
    
    app.listen(PORT , async()=>{
    
         console.log("Server has Started on port no" , PORT);

         // expose an api that can pass multiple city in one go like array something no loop
        

        //add api in city resource for getting all the airport from a city

         //play with this
        //  const city=await City.findOne({
        //     where:{
        //         id:21
        //     }
        //  })
        //  const airport=await city.getAirports()
        //  console.log(city, airport);

    })
}

setUpAndStartServer();