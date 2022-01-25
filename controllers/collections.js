const collection = require('../models/collection');

module.exports = {
  new: newCollection,
  create,
  index,
  show
};

function show(req, res) {
    const collection = collection.getOne(req.params.id);
    res.render('collections/show', { collection });
}

function index(req, res) {
    res.render('collections/index', {
      collections: collection.getAll()
    });
  }

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Collection.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/');
}

function newCollection (req, res) {
    res.render('collections/new', );
  }
