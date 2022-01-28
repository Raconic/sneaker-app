const Collection = require('../models/collection');


module.exports = {
  create,
  delete: deleteComment
};

function deleteComment(req, res) {
  Collection.findOne(
    {'comments._id': req.params.id, 'comments.user': req.user._id})
    .then(function(collection) {
      if (!collection) return res.redirect('/collections');
      collection.comments.remove(req.params.id);
      return collection.save();
    })
    .then(function(collection) {
      res.redirect(`/collections/${collections._id}`);
    });
}

function create(req, res) {
  Collection.findById(req.params.id, function(err, collection) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    collection.comments.push(req.body);
    collection.save(function(err) {
      res.redirect(`/collections/${collections._id}`);
    });
  });
}