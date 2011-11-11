
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

var data = require('./lib/data');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'P90X Calendar Generator',
    workouts: data.workouts
  });
});

app.post('/generate', function(req, res){
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
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
