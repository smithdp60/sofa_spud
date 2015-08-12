var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var db = require('../models');

router.use(bodyParser.urlencoded({extended:false}));

router.get('/',function(req,res) {
  db.favorites.findAll().then(function(taco){
    res.render("favorites/index", {faves:taco});
  });
});

//COMMENTS ROUTE
router.get('/:id/comments',function(req,res) {
  db.favorites.find({where: {id: req.params.id}}).then(function(returnedMovie){
    db.comment.findAll({where: {favoriteId: req.params.id}})
    .then(function(returnedComments) {
      res.render("favorites/comments", {returnedMovie:returnedMovie,returnedComments:returnedComments});
    })
  });
});

//POST COMMENTS ROUTE
router.post("/:id/comments", function(req,res) {
  var favId = req.params.id;
  db.comment.create({comment: req.body.comment, favoriteId: favId})
  .then(function(comment) {
    res.redirect("/favorites/" + favId + "/comments");
  })
});

//REMOVE COMMENTS ROUTE
router.delete("/:id/comments/:commentId", function(req,res) {
  var favId = req.params.id;
  db.comment.destroy({where: {id: req.params.commentId}})
  .then(function(comment) {
    res.send({result:true});
  })
})


//REMOVE FAVORITES
router.delete('/:imdbID', function(req,res){
  db.favorites.destroy({where:{imdbId:req.params.imdbID}}).then(function(){
    res.send({result:true});
  });
});

//ADD FAVORITE
router.post("/:imdbID", function(req,res) {
  db.favorites.findOrCreate({where: {imdbId: req.body.imdbID, title: req.body.Title, year: req.body.Year, poster: req.body.Poster}}).spread(function(data, created) {
    data.save().then(function(data) {
      res.send(data);
    })
  })
})

module.exports = router;