const {Airport} = require('../models/index');
const CrudRepository =require('./crud-repository')

class AirportRepository extends CrudRepository{

    constructor(){
        super(Airport);
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