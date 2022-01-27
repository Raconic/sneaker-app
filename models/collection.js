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
  user: { 
    type: Schema.Types.ObjectId, ref: 'User'
  },
},{
  timestamps: true
})
  

  module.exports=mongoose.model('Collection', collectionSchema)