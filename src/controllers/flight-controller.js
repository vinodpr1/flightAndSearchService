const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create=async(req , res)=>{
   try {
       const flight=await flightService.createFLight(req.body);
       return res.status(200).json({
          data : flight,
          success : true,
          message : 'flight Has created successfully !',
          error : {}, 
       })
   } catch (error) {
      return res.status(200).json({
        data : null,
        success : false,
        message : 'flight can not created successfully !',
        error : error, 
     })
   }
}


const getall=async(req , res)=>{
   try {
       const flights = await flightService.getAllFlight(req.query);
       return res.status(200).json({
         data : flights,
         success : true,
         message : 'Filter based flight got successfully !',
         error : {}, 
       })
   } catch (error) {
      return res.status(200).json({
         data : null,
         success : false,
         message : 'Filter based flight can not get successfully !',
         error : error, 
      })
   }
}

module.exports={
    create,
    getall
}