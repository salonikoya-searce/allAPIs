const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    categoryName:{
        type:String,
        required:[true,'Please add a category']

    },
    categoryDescription:{
        type:String,
        required:[true,'Please add category description']

    },
    vendor:[{
        type:mongoose.SchemaTypes.ObjectId,     //reference to another object
        ref:'Vendor'
    }]
},
{
    timestamps:true
})
const Category=mongoose.model('Category',categorySchema)
module.exports={Category}