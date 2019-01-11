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
  lastName: 
  String,
  date: { 
      type: Date, 
      default: Date.now 
    },
    _likedCharts:{
        type: Schema.Types.ObjectId,
        ref: "Charts"
    },
});
usersSchema.methods.avatar = function() {
  return this.firstName[0];
}

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

