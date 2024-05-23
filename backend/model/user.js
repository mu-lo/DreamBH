const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Name : {type:String, require:true },
  Username:{type:String, require:true},
  Password:{type:String, require:true},
  Email:{type:String, require:true},
  Phone:{type:String, require:true},
  isAdmin:{type:Boolean, default: false}
}, {timestamps:true})

module.exports = mongoose.model('User', UserSchema);