const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const surveysSchema = new Schema({
  firstName: { 
      type: String, 
    },
  lastName: {
    type: String
  },
  date: { 
      type: Date, 
      default: Date.now,
      require: true
    },
  affiliate: {
    type: String,
  },
  role: {
    type: String,
  }, 
  email: { 
    type: String, 
  },
  

});
// surveysSchema.methods.fullName = function() {
//   return this.firstName + " " +  this.lastName;
// }

const Survey = mongoose.model("Survey", surveysSchema);

module.exports = Survey;

