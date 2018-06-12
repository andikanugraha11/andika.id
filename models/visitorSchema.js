const mongoose = require('mongoose');
var Schema = mongoose.Schema({
  createdAt     :{
    type: Date,
    default: Date.now
  },
  visitor      : String

});
module.exports =  mongoose.model('Visitor', Schema);