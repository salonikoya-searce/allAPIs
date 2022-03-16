const mongoose = require('mongoose');
const {Vendor}=require('../models/vendorModel')

const eventSchema = mongoose.Schema({ 
    eventName: {type: String, required: true}, 
    eventLocation: {type: String, required: true}, 
    organizer: {type: String, required: true},
    contactName: {type: String, required: true},  
    contactEmail: {type: String, required: true}, 
    postcode: {type: String, required: true}, 
    startTime: {type: Date, required: true}, 
    endTime: {type: Date, required: true}, 
    address: { 
        type: String, 
        required: true 
    }, 
    city: { 
        type: String, 
        required: true, 
        default: ''
    }, 
    country: { 
        type: String, 
        required: true,
    },
    zoneIdentifier: {type: String, required: true}, 
    zoneName: [{
        subZoneName: {type: String}
    }],
    vendors: [{ 
        type:mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: Vendor,
    }] 
},{
    timestamps: true
}); 
    
const Event = mongoose.model('Event',eventSchema);
module.exports = {Event};