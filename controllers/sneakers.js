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


function newSneaker (req, res) {
    res.render('sneakers/new', );
  }

  function create(req, res) {
    const sneaker = new sneaker(req.body);
    // Assign the logged in user's id
    sneaker.userRecommending = req.user._id;
    sneaker.save(function(err) {
      if (err) return render();
      // Probably want to go to newly added book's show view
      res.redirect(`/sneakers/${sneaker._id}`);
    });
  }
