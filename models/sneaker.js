const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear()
    },
    min: 1927
  },
  model: {
    type: String,
  },
  colorWay: {
    type: String,
  }

})
  

  module.exports=mongoose.model('Sneaker', sneakerSchema)