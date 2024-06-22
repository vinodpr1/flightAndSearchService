const {FlightRepository , AirplaneRepository} = require('../repository/index');
const compareTime = require('../utils/helper'); 

class FlightService{
   
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

   
    async createFLight(flightData){
       try { 
           if(!compareTime(flightData.departureTime , flightData.arrivalTime)) {
             const airplane = await this.airplaneRepository.getAirplane(flightData.airplaneId);
             const flight = await this.flightRepository.createFLight({...flightData , totalSeats:airplane.capacity});
             return flight;
           }
           throw {error : 'Departure Time can not greater Than Arrival Time'};     
       } catch (error) {
           console.log("Some error has occured from service layer");
           throw {error};
       }
    }

    async getAllFlight(data){
        try {
             const flights=await this.flightRepository.getAllFlight(data);
             return flights;
        } catch (error) {
            console.log("Some error has occured from service layer");
            throw {error};
        }
    }

}

module.exports=FlightService