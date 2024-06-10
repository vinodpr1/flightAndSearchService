const { City } = require("../models/index");

class CityRepository {

    async createCity({name}) {
        try {
            const city=await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Error Has occured", error);
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Error Has occured", error);
        }
    }

    async updateCity(cityId,newName) {
        try {
            const city=await City.update(newName,{
                where:{
                    id:cityId, 
                }
            });
            return city
        } catch (error) {
            console.log("Error Has occured", error);
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Error Has occured", error);
            throw {error};
        }
    }


    async getAllCity() {
        try {
            const cities=await City.findAll();
            return cities;
        } catch (error) {
            console.log("Error Has occured");
            throw {error};
        }
    }


}

module.exports = CityRepository;