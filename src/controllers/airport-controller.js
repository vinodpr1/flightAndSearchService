const {AirportService} = require('../services/index');
const airportService = new AirportService();

const create=async(req , res)=>{
   
    try {
        const airport=await airportService.createEntry(req.body);
        return res.status(200).json({
            data : airport,
            success : true,
            message : 'Airport Created successfully',
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Airport can not Create successfully',
            error : error
        })
    }
}

const destroy=async(req , res)=>{
   try {
    const airport=await airportService.deleteData(req.params.id);
    return res.status(200).json({
        data : airport,
        success : true,
        message : 'Airport has deleted successfully',
        error : {}
    })
   } catch (error) {
    return res.status(500).json({
        data : {},
        success : false,
        message : 'Airport can not delete successfully',
        error : error
    })
   }
}

const update=async(req , res)=>{
    try {
     const airport=await airportService.updateData(req.params.id , req.body);
     return res.status(200).json({
         data : airport,
         success : true,
         message : 'Airport has updated successfully',
         error : {}
     })
    } catch (error) {
     return res.status(500).json({
         data : {},
         success : false,
         message : 'Airport can not updated successfully',
         error : error
     })
    }
}

const get=async(req , res)=>{
    try {
     const airport=await airportService.getData(req.params.cityId);
     return res.status(200).json({
         data : airport,
         success : true,
         message : 'Airport has fetched successfully',
         error : {}
     })
    } catch (error) {
     return res.status(500).json({
         data : {},
         success : false,
         message : 'Airport can not fetched successfully',
         error : error
     })
    }
}








module.exports={
    create,
    destroy,
    update,
    get
}