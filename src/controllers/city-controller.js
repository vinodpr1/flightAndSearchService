const {CityService}=require("../services/index");
const {SuccessCode} = require('../utils/status-code');

const cityService=new CityService();


const create=async(req , res)=>{
    try {
         
         const city=await cityService.createEntry(req.body);
         return res.status(SuccessCode.CREATED).json({
             data : city,
             success : true,
             message : 'Data has added successfully',
             error : {}, 
         })
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}

const read=async(req , res)=>{
    try {
         const city=await cityService.getData(req.params.id);
         return res.status(SuccessCode.OK).json({
             data : city,
             success : true,
             message : 'data name has Fetched successfully !',
             error : {}, 
         });
    } catch (error) {
        return res.status(201).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}

const update=async(req , res)=>{
    try {
         const city=await cityService.updateData(req.params.id,req.body);
         return res.status(SuccessCode.ACCEPTED).json({
             data : city,
             success : true,
             message : 'City Has Updated successfully !',
             error : {}, 
         });
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}


const destroy=async(req , res)=>{
    try {
         const city=await cityService.deleteData(req.params.id);
         return res.status(SuccessCode.ACCEPTED).json({
             data : city,
             success : true,
             message : 'Data Has deleted successfully !',
             error : {}, 
         });
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Something is went wrong',
            error : error, 
        })
    }
}


const getfilter=async(req , res)=>{
    try { 
         const city=await cityService.getFilter(req.query);
         return res.status(SuccessCode.OK).json({
             data : city,
             success : true,
             message : 'Filter City Has fetched successfully !',
             error : {}, 
         });
    } catch (error) {
        return res.status(500).json({
            data : null,
            success : false,
            message : 'Filter City can not fetched successfully !',
            error : error, 
        })
    }
}




module.exports={
    create,
    read,
    destroy,
    update,
    getfilter
}



