const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
userSchema.methods.avatar = function() {
  return this.firstName[0];
}

const User = mongoose.model("Users", userSchema);

module.exports = User;

