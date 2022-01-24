const Collection = require('../models/collection');

module.exports = {
  new: newCollection,
  create,
};

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Collection.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/');

function newCollection(req, res) {

}