// Setup express backend with npm dependencies
var express = require('express');
var app = express();

// Setup port
var PORT = process.env.PORT || 3000;
var path = require('path');

// Add in body-parser here so that you can use req.body
// YOUR CODE HERE





var fs = require('fs');

if (! fs.existsSync('./env.sh')) {
  throw new Error('env.sh file is missing');
}

if (! process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}

// Add Mongoose Connection HERE
// Add mongoose and Roster and Player models here
var Roster //
var Player //

// YOUR CODE HERE




// Add to the '/' route to find get response from PostMan with all
// player info. Result should look like playerStats.json in models folder
app.get('/', function(req,res){
  // YOUR CODE HERE
})

// Add to the '/addPlayer' route to add Kevin Durant, Lebron James
// and Russell Westbrook with their respective Jersey Number and Team
// the Roster document in mlab should have 3 records, one for each player
// after this is completed
// Lebron James's record should look similar to this
// {
//     "_id": {
//         "$oid": "59a7626f25bfef1f5eeebe8a"
//     },
//     "Name": "Lebron James",
//     "JerseyNum": 23,
//     "Team": "Cleveland Cavaliers",
//     "__v": 0
// }
app.post('/addPlayer', function(req,res){
  // YOUR CODE HERE
});

// Add a route with path '/updateTeam'
// that updates Kevin Durant's team to Oklahoma City Thunder
// you should be receving the a similar response form PostMan
// Succesfully switched Kevin Durant to Oklahoma City Thunder

// YOUR CODE HERE


// Add a route with path '/delete/:id' to remove Stephen Curry from
// the Player Document. Verify by checking mLab

// YOUR CODE HERE


// Add route with path '/:pid' that will provide the following info by finding
// Russell Westbrook based off of his id in the Roster document first
// {
//     "Name": "Russell Westbrook",
//     "Team": "Oklahoma City Thunder",
//     "Points": 31.6,
//     "Assists": 10.4,
//     "Rebounds": 10.7
// }

// YOUR CODE HERE



app.listen(PORT, function(error){
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

module.exports = app;
