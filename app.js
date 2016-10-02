var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//    BS starter data
var dogs = [
  {name: 'Kaya', image:'https://farm5.staticflickr.com/4018/4613971151_29b67d64bd.jpg'},
  {name: 'Taco', image:'https://farm2.staticflickr.com/1503/24258805251_8148ea7c1b.jpg'}
]


//      App Setup
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


//      Routes
// /
app.get('/', function(req, res){
  res.render('home');
});

// /dogs GET
app.get('/dogs', function(req, res){
  res.render('dogs', {dogs: dogs})
});

// /dogs/new GET
app.get('/dogs/new', function(req, res){
  res.render('new');
});

// /dogs/new POST
app.post('/dogs/new', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newDog = {name:name, image:image}

  //add to array
  dogs.push(newDog);

  //redirect
  res.redirect('/dogs');
});






//listner
app.listen(3000, function(){
  console.log("Server Started!");
});
