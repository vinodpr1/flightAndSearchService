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

module.exports={
    create
}