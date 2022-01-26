const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  collectionName: {
    type: String,
    required: true
  },
})
  

  module.exports=mongoose.model('Collection', collectionSchema)