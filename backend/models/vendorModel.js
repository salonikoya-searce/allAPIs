const mongoose=require('mongoose')

const vendorSchema=mongoose.Schema({

    legalName:{
        type:String,
        required:true
    },
    vendorDisplayName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    vendorAddress:{
        type:String,
        required:true
    },
    vendorPostCode:{
        type:String,
        required:true
    },
    vendorContactNumber:{       //validation
        type:Number,
        required:true
    },
    registeredEmail:{           //validation
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    serviceType:[
        {
        type: String,
        enum: ['On Site Delivery','Collection','Home Delivery']
        }
    ]},
    {
        timestamps : true
    });

const Vendor  = mongoose.model('Vendor',vendorSchema); 

module.exports = {Vendor};