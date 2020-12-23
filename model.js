const mongoose = require('mongoose');

const modelName = 'Category';
const schemaDefinition = {
    name: {
        type: String,
        maxLength: 20,
        trim: true, // removes whitespace from both ends of a string
        unique: true,
        required: true,
    },
    description: {
        type: String,
        maxLength: 100,
        required: false
    }
}
const schemaOptions = {timestamps: true}
const modelSchema = new mongoose.Schema(schemaDefinition,schemaOptions);

const model = mongoose.model(modelName, modelSchema);
module.exports = model;