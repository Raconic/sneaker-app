const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  collectionName: {
    type: String,
    required: true
  },
  sneaker: [{
    type: Schema.Types.ObjectId,
    ref: 'Sneaker'
  }],
})
  

  module.exports=mongoose.model('Collection', collectionSchema)