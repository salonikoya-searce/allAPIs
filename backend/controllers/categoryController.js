const asyncHandler=require('express-async-handler');
const {Category} = require('../models/categoryModel');


const getCategories=asyncHandler(async(req,res)=>{
    try{
        const category=await Category.find({});

        if(category) return res.json({
            category,
            status: 200
        })
    }catch(err){
        console.log(err)
    }
});

const categoryById = asyncHandler(async(req,res)=>{
    try {
        const categoryId = req.params.id;

        const category = await Category.findById(categoryId);
        if(category) return res.json({
            category,
            status: 200
        });
        else return res.sendStatus(500);
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        });
    }

});

 
const setCategories=asyncHandler(async(req,res)=>{
    try {
        const newCategory = await Category.create(req.body);
        if(newCategory) return res.json({
            newCategory,
            stauts: 200
        });
        else return res.sendStatus(500);
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        });
    }
});


const updateCategories=asyncHandler(async(req,res)=>{
    try {
        const categoryId = req.params.id;
        const updatedCategory = await Category.updateOne({_id:categoryId},req.body);
        if(updatedCategory) return res.json({
            updatedCategory,
            stauts: 200
        });   
        else return res.sendStatus(500);
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        });
    }
});

const deleteCategories=asyncHandler(async(req,res)=>{
    try {
        const categoryId = req.params.id;

        const category = await Category.deleteOne({_id:categoryId});
        if(category) return res.json({
            category,
            status: 200
        });
        else return res.sendStatus(500);
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        });
    }
});

module.exports={
  getCategories,setCategories,updateCategories,deleteCategories,categoryById
};
