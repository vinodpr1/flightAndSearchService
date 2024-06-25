const {AirportRepository} = require('../repository/index');
const CrudService=require('../services/crud-service');


class AirportService extends CrudService{
    
    constructor(){
        const repository = new AirportRepository();
        super(repository);
        this.airportRepository==new AirportRepository();
    }


    


    // async createAirport(data){
    //     try {
    //          const airport = await this.airportRepository.createAirport(data);
    //          return airport;
    //     } catch (error) {
    //         console.log('error has occured from service layer during creating Airport');
    //         throw {error};
    //     }
    // } 

    async deleteAirport(airportId){
        try {
             const airport = await this.airportRepository.deleteAirport(airportId);
             return airport;
        } catch (error) {
            console.log('error has occured from service layer during deleting Airport');
            throw {error};
        }
    } 

    async updateAirport(airportId , data){
        try {
             const airport = await this.airportRepository.updateAirport(airportId , data);
             return airport;
        } catch (error) {
            console.log('error has occured from service layer during updating Airport');
            throw {error};
        }
    } 


    async getAirport(cityId){
        try {
             const airport = await this.airportRepository.getAirport(cityId);
             return airport;
        } catch (error) {
            console.log('error has occured from service layer during getting Airport');
            throw {error};
        }
    } 

    

}

module.exports = AirportService;