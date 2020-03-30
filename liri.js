require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var moment = require("moment")

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var fs = require("fs");

var operator = process.argv[2];
var choice = process.argv[3];


switch (operator) {
    case "spotify-this-song":
        music();
        break;
    
}



function music() {

    spotify.search({ type: 'track', query: choice }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // console.log(JSON.stringify(data, null, 2));
        var spotifyInfo = 
            "\nArtist(s): " + data.tracks.items[0].artists[0].name +
            "\nSong Title: " + data.tracks.items[0].name +
            "\nSong Preview: " + data.tracks.items[0].preview_url+
            "\nAlbum: " + data.tracks.items[0].album.name;

        console.log (spotifyInfo);

        
  
        });
}