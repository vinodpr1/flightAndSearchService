const {Airplane} = require('../models/index');

class AirplaneRepository{
   
    async getAirplane(airplaneId){
        try {
            const airplane=await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Error Has occured in repo while creating Airport", error);
            throw {error};
        }
    }

}

module.exports = AirplaneRepository