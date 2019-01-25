const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { 
      type: String, 
     
    },
    password: { 
      type: String, 
     
    },
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

});
usersSchema.methods.avatar = function() {
  return this.firstName + " " +  this.lastName;
}

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

