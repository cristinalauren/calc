// Require the modules we're going to need:
var express = require("express"),
  ejs = require("ejs"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

  // Now instantiate our express app:
var app = express();
var solution = 0;
  // Set the view engine to be "EJS"
app.set('view engine', 'ejs');

  // Set up body parser
app.use(bodyParser.urlencoded({extended: true
}));
  // Set up method override to work with POST requests that have the parameter "_method=DELETE"
app.use(methodOverride('_method'));
  // Tell express to use EJS as its view engine

app.set("view engine", "ejs");
// Set a root route

app.get('/', function (req, res) {
  res.render("index", {solution: solution});
});

app.post('/add', function(req, res) {
    var x = Number(req.body.number1);
    var y = Number(req.body.number2);
     solution = x+y;
     res.redirect('/');
});

app.post('/subtract', function(req, res) {
    var x = Number(req.body.number1);
    var y = Number(req.body.number2);
     solution = x-y;
     res.redirect('/');
});

app.post('/multiply', function(req, res) {
    var x = Number(req.body.number1);
    var y = Number(req.body.number2);
     solution = x*y;
     res.redirect('/');
});

app.post('/divide', function(req, res){
    var x = Number(req.body.number1);
    var y = Number(req.body.number2);
     solution = x/y;
     res.redirect('/');
});

app.listen(3000);