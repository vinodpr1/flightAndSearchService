const {Flight} = require('../models/index');

class FlightRepository{
   async createFLight(flightData){
      try {
         const flight=await Flight.create(flightData);
         return flight;
      } catch (error) {
        console.log("Error Has occured in repo while creating Flight", error);
        throw {error};
      }
   }
}

module.exports = FlightRepository;