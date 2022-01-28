const Sneaker = require('../models/sneaker');
const Collection = require('../models/collection');

module.exports = {
  new: newSneaker,
  create,
  index,
  show,
};



function show(req, res) {
    Sneaker.findById(req.params.id, function (err, sneaker){
        console.log(sneaker)
        res.render('sneakers/show', {sneaker})
    })
}

function index(req, res) {
    Sneaker.find({})
      .then(function (sneakers) {
          console.log('sneakers', sneakers)
        res.render('sneakers/index', {sneakers});
      })
      .catch(function (err) {
          console.log(err)
        res.redirect('/sneakers');
      });
  }


function newSneaker (req, res) {
    res.render('sneakers/new', { title: 'Add Sneaker'});
  }

  function create(req, res) {
      req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
     const sneaker = new Sneaker(req.body);
     console.log(sneaker)
     sneaker.save(function (err) {
        if (err) return res.redirect("/sneakers/new");
        res.redirect("/sneakers");
    });
}


     
