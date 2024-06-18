const {CityRepository}=require("../repository/index")

class CityService{
    
    constructor(){
        this.cityRepository=new CityRepository();
    } 

    async createCity(data){
        try {
             const response=await this.cityRepository.createCity(data);
             return response;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const city=await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response=await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }
  
    async getFilter(filter){
        try {
            const response=await this.cityRepository.getFilter({name:filter.name});
            return response;
        } catch (error) {
            console.log('error has occured from service layer during fetching all city');
            throw {error};
        }
    }
}

module.exports=CityService;