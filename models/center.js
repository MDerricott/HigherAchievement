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
    farmRate:{
        type: Number,
    },
    affiliate:{
        type: String,
    },

    scholarDemo: {
        data: {
            type: Array
        },
        labels: {
            type: Array
        },
    },
    cohortData: {
        data: {
            type: String
        },
        label: {
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