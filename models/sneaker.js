const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  brandName: {
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
  modelName: {
    type: String,
  },
  colorWay: {
    type: String,
  },
  image: {
    type: String,
  }

})
  

  module.exports=mongoose.model('Sneaker', sneakerSchema)