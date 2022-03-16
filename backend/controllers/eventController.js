const { default: mongoose } = require('mongoose');
const {Event} = require('../models/eventModel.js');

const getAllEvents = async(req,res) => { 
    try {
        const allEvents=await Event.find();
        res.status(200).json(allEvents);
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        });
    }
};

const getEvent = async(req,res) => {
    try {
        const eventId = req.params.id;
        const event=await Event.findById(eventId);
        //If event not found
        if(!event){             
            res.send(400)
            throw new Error('Event not found')
        }
        res.status(200).json(event);
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

const deleteEvent= async(req,res) => {
    try {
        const eventId = req.params.id;
        const event=await Event.findByIdDelete(eventId)
        //If event is not found
        if(!event){
            res.send(400)
            throw new Error('Event not found')
        }
        res.status(200);
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

const updateEvent = async(req,res) => {
    try {
        const event=await Event.findById(req.params.id)
        //If event not found
        if(!event){
            res.send(400)
            throw new Error('Event not found')
        }
        const updatedEvent=await Event.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json(updatedEvent)
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

const createEvent = async(req,res) => {
    try {
        const event= await Event.create(req.body);
       res.status(200).json(event)
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};
const getAllEventVendors=async(req,res)=>{
    try{
        const eventId=mongoose.Types.ObjectId(req.params.eventId)
        const allVendors=await Event.aggregate([
           
            {$lookup: {
                from: "vendors",
                localField: "vendors",
                foreignField: "_id",
                as: 'vendorDetails'
            }},
            {$project: {"eventName":1,"vendorDetails":1}}
            
            
        ])
        console.log(allVendors)
        res.status(200).json(allVendors);
    }catch(error){
        console.log(error)
        return res.json({
            error,
            status:500 
        })
    }
}

module.exports = {getAllEvents,getEvent,createEvent,deleteEvent,updateEvent,getAllEventVendors};