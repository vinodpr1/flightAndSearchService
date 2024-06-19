const express=require("express");
const router=express.Router();

const CityController=require('../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller')

router.post('/city' , CityController.create);
router.get('/city/:id' , CityController.read);
router.delete('/city/:id' , CityController.destroy);
router.patch('/city/:id' , CityController.update);
router.get('/city' , CityController.getfilter);


router.post('/airport' , AirportController.create)
router.delete('/airport/:id' , AirportController.destroy)
router.patch('/airport/:id' , AirportController.update)
router.get('/airport/:cityId' , AirportController.get)


module.exports=router;