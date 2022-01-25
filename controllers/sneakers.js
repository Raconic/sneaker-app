const sneaker = require('../models/sneaker');

module.exports = {
  new: newSneaker,
  create,
  index,
  show
};

function show(req, res) {
    const sneaker = Sneaker.getOne(req.params.id);
    res.render('sneakers/show', { sneaker });
}

function index(req, res) {
    res.render('sneakers/index', {
      sneakers: Sneaker.getAll()
    });
  }

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Sneaker.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/');
}

function newSneaker (req, res) {
    res.render('sneakers/new', );
  }



