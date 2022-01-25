const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  brandName: {
    type: String,
    required: true
  },
})
  

  module.exports=mongoose.model('Collection', collectionSchema)