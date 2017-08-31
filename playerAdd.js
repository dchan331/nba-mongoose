// importing playerStats.json from source folder
var playerStats = require('./model/source/playerStats.json');

// mongoose configuration
var mongoose = require('mongoose');
var Player = require('./model/player');
var fs = require('fs');

if (! fs.existsSync('./env.sh')) {
  throw new Error('env.sh file is missing');
}

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

// loop through playerStats.json and add each player and their stats to mlab
playerStats.forEach(function(player){
  var newPlayer = new Player({
    Name: player.Name,
    Points: player.Points,
    Rebounds: player.Rebounds,
    Assists: player.Assists
  });

  newPlayer.save(function(err){
    if(err){
      console.log('error', err);
    }
  });
})

// close mongoose connection
mongoose.connection.close()
