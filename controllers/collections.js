const Collection = require('../models/collection');

module.exports = {
  new: newCollection,
  create,
  index,
  show
};

function show(req, res) {
    Collection.findById(req.params.id, function (err, collection){
        console.log(collection)
        res.render('collection/show', {collection})
    })
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