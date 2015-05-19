var express = require('express');
var moviesCtrl = require("./controllers/movies");
var favesCtrl = require("./controllers/favorites");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use("/movies", moviesCtrl);
app.use("/favorites", favesCtrl);

app.get("/", function(req, res) {
  res.render("index")
})

app.listen(process.env.PORT || 3000)