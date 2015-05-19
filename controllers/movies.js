var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var db = require('../models');

router.use(bodyParser.urlencoded({extended:false}));

//retrieves search data
router.get("/", function(req,res) {
  var query = req.query.q;
  var url = "http://www.omdbapi.com/?s=" + query;
  request(url, function(error, response, data) {
    if (!error && response.statusCode == 200) {
      var movies = JSON.parse(data);
      res.render("movies/index", movies)
    }
  })
})

//applies imdbID data to SHOW file
router.get("/:id", function(req,res) {
  var id = req.params.id;
  var url = "http://www.omdbapi.com/?i=" + id + "&tomatoes=true";
  request(url, function(error, response, data) {
    if (!error && response.statusCode == 200) {
      var movies = JSON.parse(data);
      db.favorites.find({where: {imdbId: id}}).then(function(fave) {
        if (fave !== null) {
          movies.fave = true;
        } else {
          movies.fave = false;
        }
      res.render("movies/show", movies);
      })
    }
  })
})



module.exports = router;