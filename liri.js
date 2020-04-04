require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var moment = require("moment")

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var fs = require("fs");

var operator = process.argv[2];
var choice = process.argv.slice(3).join(" ");
var text;

userInput();

function userInput() {
    switch (operator) {
        case "concert-this":
            band();
            break;
        case "spotify-this-song":
            music();
            break;
        case "movie-this":
            movie();
            break;
        case "do-what-it-says":
            doIt();
            break;
    }
}

function band() {

    axios.get("https://rest.bandsintown.com/artists/" + choice + "/events?app_id=codingbootcamp").then(
        function(response) {

            
            for (var i = 0; i < response.data.length; i++) {
                var bandInfo = 
                    "\n----concert-this----" +
                    "\nArtist/Band: " + choice + 
                    "\nVenue: " + response.data[i].venue.name +
                    "\nLocation: " + response.data[i].venue.city + ", " + response.data[i].venue.country +
                    "\nDate of event: " + moment(response.data[i].datetime).format("MM/DD/YYYY") + "\n" ;
                    console.log(bandInfo)
                    text = bandInfo;
                    logOutput();
            }

            
        })    
        .catch(function(error) {
         
            console.log(error);
        })
};

function music() {
    if(!choice) {
        choice = 'The Sign'
    };
    spotify.search({ type: 'track', query: choice }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        var spotifyInfo = 
            "\n----spotify-this-song----" +
            "\nArtist(s): " + data.tracks.items[0].artists[0].name +
            "\nSong Title: " + data.tracks.items[0].name +
            "\nSong Preview: " + data.tracks.items[0].preview_url+
            "\nAlbum: " + data.tracks.items[0].album.name + "\n";
            
        console.log (spotifyInfo);
        text = spotifyInfo
        logOutput();
  
        });

};

function movie() {
    if(!choice) {
        choice = 'Mr. Nobody.'
    };
    axios.get("http://www.omdbapi.com/?t=" + choice + "&y=&plot=short&apikey=trilogy").then(
        function(response) {

            

            var omdb = 
                "\n----movie-this----" +
                "\nTitle: " + response.data.Title +
                "\nYear released: " + response.data.Year +
                "\nIMDB rating: " + response.data.Rated +
                "\nCountry produced in: " + response.data.Country +
                "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nLanguage: " + response.data.Language +
                "\nPlot " + response.data.Plot +
                "\nStarring actors: " + response.data.Actors + "\n";

        console.log (omdb);
        text = omdb;
        logOutput();
        })
        .catch(function(error) {
         
            console.log(error);
       })
}

function doIt() {
    fs.readFile("random.txt", "utf8", function(error,data){
        if(error) {
            return console.log(error);
        }
        
        var dataArr = data.split(",");
        console.log(dataArr);
        operator = dataArr[0];
        choice = dataArr[1];
        fs.appendFile("log.txt", "\n----do-what-it-says----", function(err){
            if (err) {
                console.log(err);
            }
        })
        userInput();
        
    });
}

function logOutput() {
    fs.appendFile("log.txt", text, function(err){
        if (err) {
            console.log(err);
        }
    });
}