const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chartSchema = new Schema({
    chartName:{
        type: String,
        required: true,
    },
    _userLikes: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Chart = mongoose.model("Chart", chartSchema);

module.exports = Chart