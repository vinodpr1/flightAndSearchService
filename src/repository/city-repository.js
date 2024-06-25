const { City } = require("../models/index");
const { Op } = require("sequelize");
const CrudRepository = require('./crud-repository');

class CityRepository extends CrudRepository {

    constructor(){
        super(City);
    }


    async getFilter({name}) {
        try {
                if(!name){
                    const cities=await City.findAll();
                    return cities;
                }
                const cities=await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : name
                        }
                    }
                });
                return cities;
        } catch (error) {
            console.log("Error Has occured on repo level");
            throw {error};
        }
    }

  
}

module.exports = CityRepository;