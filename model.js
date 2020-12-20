const mongoose = require('mongoose');

const modelName = 'Category';
const schemaDefinition = {
    name: {
        type: String,
        required: true
    }
}
const schemaOptions = {timestamps: true}
const modelSchema = new mongoose.Schema(schemaDefinition,schemaOptions);

const model = mongoose.model(modelName, modelSchema);
module.exports = model;