const {Airport} = require('../models/index');

class AirportRepository{

    async createAirport(data){
        try {
             const airport=await Airport.create(data);
             return airport;
        } catch (error) {
            console.log("Error Has occured in repo while creating Airport", error);
            throw {error};
        } 
    }


    async deleteAirport(airportId){
        try {
             const airport=await Airport.destroy({
                where : {
                    id : airportId
                }
             });
             return airport;
        } catch (error) {
            console.log("Error Has occured in repo while deleting Airport", error);
            throw {error};
        } 
    }



    async updateAirport(airportId,data){
        try {
             const airport=await Airport.update(data,
             {
                where : {
                    id : airportId
                }
             });
             return airport;
        } catch (error) {
            console.log("Error Has occured in repo while updating Airport", error);
            throw {error};
        }
    }

    async getAirport(cityId){
        try {
             const airport=await Airport.findAll({
                where : {
                    cityId : cityId
                }
             });
             return airport;
        } catch (error) {
            console.log("Error Has occured in repo while getting Airport", error);
            throw {error};
        }
    }

}

module.exports=AirportRepository