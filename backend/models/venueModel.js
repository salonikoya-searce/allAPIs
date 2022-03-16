const mongoose = require('mongoose');
const {Vendor}=require('../models/vendorModel')

const venueSchema = mongoose.Schema({ 
    name: {type: String, required: true}, 
    location: {type: String, required: true}, 
    postcode: {type: String, required: true}, 
    isActive: {type: Boolean, required: true, default: false}, 
    openingTime: {type: Date, required: true}, 
    closingTime: {type: Date, required: true}, 
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
    
const Venue = mongoose.model('Venue',venueSchema);
module.exports = {Venue};