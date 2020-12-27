const mongoose = require('mongoose');
const User = require('../models/User');

async function allUser(request, response){
    try {
        const model = await User.find();
        response.status(200).json(model);
    } catch (error) {
        response.status(400).json(error);
    }
}

async function loginUser(request, response){
    try{
        const {email, password} = request.body;
        const user = await User.findOne({email, password});
        if(user){
            response.status(200).json(user);
        }else{
            response.status(200).send('Wrong Information');
        }
    }catch(error){
        response.status(400).json(error);
    }
}

async function createUser(request, response){
    try{
        const model = new User(request.body);
        const result = await model.save();
        response.status(200).json({'message' : 'New User Create Successful', 'result' : result})
    }catch(error){
        response.status(400).json(error);
    }
}

async function logoutUser(request, response){
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    allUser,
    loginUser,
    createUser,
    logoutUser
}