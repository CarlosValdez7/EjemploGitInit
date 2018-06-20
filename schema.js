var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  nombre: {
    type : String,
    required : true
  },
  apellido : {
    type : String,
    required : true
  },
  edad: {
    type : Number,
    required : true
  }
});
