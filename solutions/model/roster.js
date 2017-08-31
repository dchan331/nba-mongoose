var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RosterSchema = new Schema({
  Name:{
    type: String,
    required: true
  },
  JerseyNum:{
    type: Number,
    required: false
  },
  Team:{
    type: String,
    required: true
  }
});

module.exports =  mongoose.model('Roster', RosterSchema)
