const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  brandName: {
    type: String,
    required: true
  },
})
  

  module.exports=mongoose.model('Sneaker', sneakerSchema)