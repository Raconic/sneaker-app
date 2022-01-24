const sneaker = require('../models/sneaker');

module.exports = {
  new: newSneaker,
  create,
  index
};

function index(req, res) {
    Sneaker.find({}, function(err, sneakers){
        if(err) return res.redirect('/');
    res.render('sneakers/index', { sneakers })
    });
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Sneaker.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/sneakers');
}

function newSneaker (req, res) {
    res.render('sneakers/new');
  }



