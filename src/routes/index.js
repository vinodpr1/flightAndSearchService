const express=require('express');
const router=express.Router();

const APIRoutes=require('./v1/index')
router.use('/v1', APIRoutes);

module.exports=router;