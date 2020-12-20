const Category = require('./model');

async function getAllCategory(request, response){
    const model = await Category.find();
    response.json(model);
}

async function getSingleCategory(request, response){
    const id = request.params.id;
    const model = await Category.findById(id);
    response.json(model);
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