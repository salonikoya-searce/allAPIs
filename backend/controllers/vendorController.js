const {Vendor} = require('../models/vendorModel')
const asyncHandler=require('express-async-handler')

const getAllVendors = async(req,res)=>{
    try{
        const vendors=await Vendor.find()
        return res.json({
            vendors,
            status:200
        })
    }catch(error){
        console.log(error)
        return res.json({
            err,
            status:500
        })
    }
}

const getVendor= async(req,res)=>{
    try{
        const vendorId=req.params.id;
        const vendor=await Vendor.findById({_id:vendorId});
        if(!vendor){
            return res.sendStatus(404)
        }return res.json({
            vendor,
            status:200
        })
    }catch(err){
        console.log(error)
        return res.json({
            err,
            status:500
        })
    }
}

const createVendor=async(req,res)=>{
    try{
        const {legalName,vendorDisplayName,description,vendorAddress,vendorPostCode,vendorContactNumber,
               registeredEmail,serviceType}=req.body;
       
        if(!legalName || !vendorDisplayName || !description || !vendorAddress
           || !vendorPostCode || !vendorContactNumber || !registeredEmail || !serviceType)
                return res.sendStatus(403)
        
        const vendorExists=await Vendor.findOne({registeredEmail})
        if(vendorExists) return res.sendStatus(403);
        const vendor=await Vendor.create(req.body);
        if(vendor) {
            return res.send({
                vendor,
                status: 200
            });
        }
    }catch(err){
       
        return res.json({
            err,
            status:500  
        })
    }
}

const updateVendor=async(req,res)=>{
    try{
        const vendor=await Vendor.findById(req.params.id)

        if(!vendor){
            res.send(400)
            throw new Error('Vendor not found')
        }
        const updatedVendor=await Vendor.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json(updatedVendor)
    }catch(err){
        return res.json({
            err,
            status:500 
        })
    }
}

const deleteVendor=async(req,res)=>{
    try{
        const vendor=await Vendor.findById(req.params.id)
        if(!vendor){
            res.send(400)
            throw new Error('Vendor not found')
        }
        await vendor.remove()
        res.status(200).json({id:req.params.id})
    }catch(err){
        return res.json({
            err,
            status:500 
        })
    }
}



module.exports={getAllVendors,getVendor,updateVendor,deleteVendor,createVendor}
