const DummyuserService = require('../services/dummyuser-service')

const dummyuserService= new DummyuserService();

const create=async(req,res)=>{
   try {
      const response=await dummyuserService.createEntry(req.body);
      return res.status(201).json({
            data:response,
            status:true,
            message:"Successfully data has been added",
            error:{}
      })
   } catch (error) {
      return res.status(500).json({
         data:null,
         status:false,
         message:"data can not added",
         error:error
      })
   }
}

module.exports={
    create
}