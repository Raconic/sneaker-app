const Collection = require('../models/collection');


module.exports = {
  create,
  delete: deleteComment
};

function deleteComment(req, res) {
    console.log(req.user)
  Collection.findOne(
    {'comments._id': req.params.id, 'comments.user': req.user._id})
    .then(function(collection) {
      if (!collection) return res.redirect('/collections');
      collection.comments.remove(req.params.id);
      return collection.save();
    })
    .then(function(collection) {
      res.redirect(`/collections/${collection._id}`);
    });
}

function create(req, res) {
  Collection.findById(req.params.collectionId, function(err, collection) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    collection.comments.push(req.body);
    collection.save(function(err) {
      res.redirect(`/collections/${collection._id}`);
    });
  });
}