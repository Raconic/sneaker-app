const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

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
  comments: [commentSchema]
},{
  timestamps: true
},)

  

  module.exports=mongoose.model('Collection', collectionSchema)