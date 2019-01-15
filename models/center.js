const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const centerSchema = new Schema({
    centerName:{
        type: String,
        required: true,
    },
    enrollment: {
        type: Number,
        
    },
    glyph: {
        type: Array,
        
    },
    heatmap:{
        type: Array
    },
    centerDirector: {
        name: {
            type: String
        },
        email: {
            type: String
        },
    },
    outcomes:{
        math: {
            type: Number
        },
        reading: {
            type: Number
        }
    },

});

const Center = mongoose.model("Centers", centerSchema);

module.exports = Center;