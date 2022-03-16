const mongoose=require('mongoose')

const itemSchema=mongoose.Schema({
    itemName:{
        type:String,
        required:[true,'Please add an item']

    },
    itemDescription:{
        type:String,
        required:[true,'Please add item description']

    },
    price:{
        type:Number
    },
    variants:[{
        name:{
            type:String,
        },
        price:{
            type:Number
        }
        
    }],
    toppings:
       [{
            groupName:{
                type:String
            },
            toppingDetails:[{
                name:{
                    type:String
                },
                price:{
                    type:Number
                },
                inStock:{
                    type:Boolean
                }
            }]
        }]
    ,
    inStock:{
        type:Boolean
    },
    category:{
        type:mongoose.SchemaTypes.ObjectId,     //reference to another object
        ref:'Category'
    },
    vendor:{
        type:mongoose.SchemaTypes.ObjectId,     //reference to another object
        ref:'Vendor'
    }
},
{
    timestamps:true
})
const Item=mongoose.model('Item',itemSchema)
module.exports={Item}