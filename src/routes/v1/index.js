const express = require("express");
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');
const DummyuserController=require('../../controllers/dummyuser-controller')


router.post('/city' , CityController.create);
router.get('/city/:id' , CityController.read);
router.delete('/city/:id' , CityController.destroy);
router.patch('/city/:id' , CityController.update);
router.get('/city' , CityController.getfilter);


router.post('/airport' , AirportController.create);
router.delete('/airport/:id' , AirportController.destroy);
router.patch('/airport/:id' , AirportController.update);
router.get('/airport/:cityId' , AirportController.get);

router.post('/flight' , FlightController.create);
router.get('/flight' , FlightController.getall);

router.post('/dummyuser',DummyuserController.create);


module.exports=router;