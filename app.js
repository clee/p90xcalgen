
/**
 * Module dependencies.
 */

var express = require('express');

var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');

var app = module.exports = express();

var data = require('./lib/data');

// Configuration

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.use(errorHandler({ dumpExceptions: true, showStack: true })); 
} else {
  app.use(errorHandler()); 
}

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'P90X Calendar Generator',
    workouts: data.workouts
  });
});

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/generate', urlencodedParser, function(req, res){
  console.log("user hit generate!, with %j", req.body);
  res.contentType('text/calendar');
  res.attachment('workout.ics');
  res.render('calendar.ejs',
    {layout: false,
     date: req.body.date,
     time: req.body.time,
     workout: req.body.workout,
     workouts: data.workouts,
     exercises: data.exercises,
     routines: data.routines});
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env);
