const mongoose = require('mongoose');
const Category = require('./model');

async function getAllCategory(request, response){
    try {
        const model = await Category.find();
        response.status(200).json(model);
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
    try{
        const model = new Category(request.body);
        const result = await model.save();
        response.status(200).json({'message' : 'New Category Create Successful', 'result' : result})
    }catch(error){
        response.status(400).json(error);
    }
}

async function putSingleCategory(request, response){
    try{
        const isValid = mongoose.Types.ObjectId.isValid(request.params.id);
        if(isValid){
            const id = mongoose.Types.ObjectId(request.params.id);
            const model = await Category.findByIdAndUpdate(id,{$set: request.body},{new : true});
            if(model == null){
                response.status(200).send("Empty Category Found");
            }else{
                response.status(200).json({'message' : 'This Category Update Successful', 'result' : model})
            }
        }else{
            response.status(200).send("Invalid Category Id");
        }
    }catch(error){
        response.status(400).json(error);
    }
}

async function deleteSingleCategory(request, response){
    try{
        const isValid = mongoose.Types.ObjectId.isValid(request.params.id);
        if(isValid){
            const id = mongoose.Types.ObjectId(request.params.id);
            const model = await Category.findByIdAndDelete(id);
            if(model == null){
                response.status(200).send("Empty Category Found");
            }else{
                response.status(200).json({'message' : 'This Category Delete Successful', 'result' : model})
            }
        }else{
            response.status(200).send("Invalid Category Id");
        }
    }catch(error){
        response.status(400).json(error);
    }
}

module.exports = {
    getAllCategory,
    getSingleCategory,
    postSingleCategory,
    putSingleCategory,
    deleteSingleCategory
}