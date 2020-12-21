const mongoose = require('mongoose');
const Category = require('./model');

async function getAllCategory(request, response){
    try {
        const model = await Category.find();
        response.json(model);
    } catch (error) {
        response.status(400).json(error);
    }
}

async function getSingleCategory(request, response){
    try{
        const isValid = mongoose.Types.ObjectId.isValid(request.params.id);
        if(isValid){
            const id = mongoose.Types.ObjectId(request.params.id);
            const model = await Category.findById(id);
            if(model == null){
                response.status(200).send("Empty Category Found");
            }else{
                response.status(200).json(model);
            }
        }else{
            response.status(200).send("Invalid Category Id");
        }
    }catch(error){
        response.status(400).json(error);
    }
}

async function postSingleCategory(request, response){
    const model = new Category(request.body);
    await model.save();
    response.send("New Category Create Successfull");
}

async function putSingleCategory(request, response){
    const id = request.params.id;
    const model = await Category.findByIdAndUpdate(id,{$set: request.body});
    response.send("Category Update Successfull");
}

async function deleteSingleCategory(request, response){
    const id = request.params.id;
    const model = await Category.findByIdAndDelete(id);
    response.send("Category Delete Successfull");
}

module.exports = {
    getAllCategory,
    getSingleCategory,
    postSingleCategory,
    putSingleCategory,
    deleteSingleCategory
}