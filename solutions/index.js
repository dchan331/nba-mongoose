// setup express backend with npm dependencies
var express = require('express');
var app = express();

// setup body-parser so that you can use req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// setup port
var PORT = process.env.PORT || 3000;
var path = require('path');

// mongoose configuration have them add it here
var mongoose = require('mongoose');
var Roster = require('./model/roster');
var Player = require('./model/player');

if (! process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}
mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});
mongoose.connection.on('error', function() {
  console.log('Error connecting to MongoDb. Check MONGODB_URI in env.sh');
  process.exit(1);
});

mongoose.connect(process.env.MONGODB_URI);
///

//setup routes here

app.get('/', function(req,res){
  Player.find({}, function(err,result){
    if(err){
      console.log('error in get / ' ,err);
    }else{
      res.send(result)
    }
  })
})

app.post('/addPlayer', function(req,res){
  /// add here
  var player = new Roster({
    Name: req.body.name,
    JerseyNum: req.body.jersey,
    Team: req.body.team
  })

  player.save(function(err){
    if(err){
      console.log('error', err)
    }else{
      res.send('Success!')
    }
  })
  /////
});

app.post('/updateTeam', function (req, res) {
  Roster.findOneAndUpdate({Name: req.body.name}, {Team: req.body.team}, function(err, result){
    if(err){
      console.log('error in post /updatePlayer', err)
    }else{
      res.send('Succesfully switched '+req.body.name+' to '+req.body.team)
    }
  })
});

app.post('/delete/:id', function (req, res) {
  Player.remove({_id: req.params.id}, function(err, result){
    if(err){
      console.log('error in post delete/id', err);
    }else{
      res.send('Player with id '+req.params.id+' has been removed')
    }
  })
});

app.get('/:pid', function (req, res) {
  Roster.findOne({_id: req.params.pid},function(err, result){
    Player.findOne({Name: result.Name}, function(err, result2){
      res.send({
        Name: result2.Name,
        Team: result.Team,
        JerseyNum: result2.JerseyNum,
        Points: result2.Points,
        Assists: result2.Assists,
        Rebounds: result2.Rebounds
      })
    })
  })
});

app.listen(PORT, function(error){
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

module.exports = app;
