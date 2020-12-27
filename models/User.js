const mongoose = require('mongoose');

const modelName = 'User';
const schemaDefinition = {
    name: {
        type: String,
        maxLength: 20,
        trim: true, // removes whitespace from both ends of a string
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    }
}
const schemaOptions = {timestamps: true}
const modelSchema = new mongoose.Schema(schemaDefinition,schemaOptions);

const model = mongoose.model(modelName, modelSchema);
module.exports = model;