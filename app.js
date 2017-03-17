var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var routes = require('./routes');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.use('/', routes);

// No route exists
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  res.status(404).render('error', err);
});

//Error handling
app.use(function(err, req, res, next) {
	console.error(err.stack)
	
})

app.listen(3000, function(){
	console.log("Listening on 3000")
})