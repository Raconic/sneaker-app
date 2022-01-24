const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
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
    // Will add and maintain
    // createdAt & updatedAt properties
    timestamps: true
  });


  module.exports=mongoose.model('Sneaker', sneakerSchema)