const {CityRepository}=require("../repository/index");
const CrudService=require('../services/crud-service');

class CityService extends CrudService{
    
    constructor(){
        const repository=new CityRepository();
        super(repository);
        this.cityRepository = new CityRepository();  
    } 

  
    async getFilter(filter){
        try {
            const response = await this.cityRepository.getFilter({name:filter.name});
            return response;
        } catch (error) {
            console.log('error has occured from service layer during fetching all city');
            throw {error};
        }
    }

}

module.exports = CityService;