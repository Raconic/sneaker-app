const Collection = require('../models/collection');
const Sneaker = require('../models/sneaker');
module.exports = {
  new: newCollection,
  create,
  index,
  show,
  addToCollection
};

function addToCollection(req, res) {
  Collection.findById(req.params.collectionId, function(err, collection) {
    console.log('collection', collection)
    Sneaker.findById(req.body.sneakerId, function(err, sneaker){
      console.log('sneaker', sneaker)
      collection.sneaker.push(sneaker)
      collection.save(function(err) {
        res.redirect(`/collections/${collection._id}`);
    })
    });
  });
}

function show(req, res) {
  Collection.findById(req.params.id)
    .populate('sneaker').exec(function(err, collection) {
      Sneaker.find(
        {_id: {$nin: collection.Sneaker}},
        function(err, sneakers) {
          console.log(sneakers);
          res.render('collections/show', {
            collection, sneakers
          });
        }
      );
    });
}

function index(req, res) {
    Collection.find({})
      .then(function (collections) {
          console.log('collections', collections)
        res.render('collections/index', {collections});
      })
      .catch(function (err) {
          console.log(err)
        res.redirect('/collections');
      });
  }


function newCollection (req, res) {
    res.render('collections/new', { title: 'Create Collection'});
  }

  function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
     const collection = new Collection(req.body);
     console.log(collection)
     collection.save(function (err) {
        if (err) return res.redirect("/collections/new");
        res.redirect("/collections");
    });
}