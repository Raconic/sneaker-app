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
    res.render('sneakers/new', { title: 'Add Sneaker'});
  }

  function create(req, res) {
    const sneaker = new Sneaker(req.body);
    console.log(sneaker)
    req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
    sneaker.save(function (err) {
        if (err) return res.render("sneakers/new");
        res.redirect("/sneakers");
    });
}

     
