const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {


   #createFilter(data) {
      const filter = {};

      if (data.arrivalAirportId) {
         filter.arrivalAirportId = data.arrivalAirportId;
      }

      if (data.departureAirportId) {
         filter.departureAirportId = data.departureAirportId;
      }


      //not working need to be fixed
      // nee to play with this functionality

      // if (data.minPrice && data.maxPrice) {
      //    Object.assign(filter, {
      //      [Op.and]: [
      //                   { price: 4000 },
      //                   { price: 5000 }
      //                ]
      //          })
      // }

      if (data.minPrice) {
         Object.assign(filter, { price: { [Op.gte]: data.minPrice } })
      }

      if (data.maxPrice) {
         Object.assign(filter, { price: { [Op.lte]: data.maxPrice } })
      }

      return filter;
   }


   async createFLight(flightData) {
      try {
         const flight = await Flight.create(flightData);
         return flight;
      } catch (error) {
         console.log("Error Has occured in repo while creating Flight", error);
         throw { error };
      }
   }

   async getFlight(flightId) {
      try {
         const flight = await Flight.getByPK(flightId);
         return flight;
      } catch (error) {
         console.log("Error Has occured in repo while fetching single Flight", error);
         throw { error };
      }
   }

   async getAllFlight(filter) {
      try {
         const filterObj = this.#createFilter(filter);

         const flight = await Flight.findAll({
            where: filterObj
         });
         return flight;
      } catch (error) {
         console.log("Error Has occured in repo while fetching All Flight", error);
         throw { error };
      }
   }



}

module.exports = FlightRepository;