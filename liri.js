require("dotenv").config();
var fs = require('fs')
var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var command = process.argv[2];

switch (command) {

        case "concert-this":
                concerts();
                break;

        case "spotify-this-song":
                music();
                break;

        case "movie-this":
                movies();
                break;

        case "do-what-it-says":
                says();
                break;
}

// Bands in town axios
function concerts() {
       
        var artist = process.argv[3];
        
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        if (artist === undefined){
                queryUrl = "https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp"
                
        }

        if (command === "concert-this") {

                axios.get(queryUrl).then(
                        function (response) {
                                        console.log("------------------------------");
                                        console.log("Artist: " + response.data[0].lineup);
                                        console.log("Venue: " + response.data[0].venue.name)
                                        console.log("Event Date: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
                                        console.log("------------------------------")
                                
                        }).catch(function (error) {
                                console.error('Error occurred: ' + error);
                                
                        });
        } 


};

//Spotify API
function music() {
       

        var songs = process.argv[3];
        if(songs === undefined){
                songs = "the sign"
        }

        if (command === "spotify-this-song") {
        
        spotify
        .search({ type: 'track', query: songs })
        .then(function(response) {
          console.log("------------------------------")
          console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
          console.log("Song: " + response.tracks.items[0].name);
          console.log("Album: " + response.tracks.items[0].album.name)
          console.log("Preview: " + response.tracks.items[0].preview_url);
          console.log("------------------------------")
          
        })
        .catch(function(err) {
          console.log(err);
        });

}

};

// OMDB Axios
function movies() {
        var film = process.argv[3];

        var queryUrl = "http://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=trilogy";

        if (film === undefined){
                queryUrl = "http://www.omdbapi.com/?t=mr.nobody&y=&plot=short&apikey=trilogy"
        }

        if (command === "movie-this") {

                axios.get(queryUrl).then(
                        function (response) {
                                console.log("------------------------------");
                                console.log("Title: " + response.data.Title);
                                console.log("Year: " + response.data.Year);
                                console.log("The movie's rating is: " + response.data.imdbRating);
                                console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
                                console.log("Country produced: " + response.data.Country);
                                console.log("Language: " + response.data.Language);
                                console.log("Plot: " + response.data.Plot);
                                console.log("Actors: " + response.data.Actors);
                                console.log("------------------------------")
                        })
                        .catch(function(err) {
                                console.log(err);
                              });
        }
};


function says() {
        fs.readFile("random.txt", function read(error, data){
                if(error){
                return console.log(error);
                }
                var dataArr = data.split(',');
                spotify(dataArr[0], dataArr[1])
        });
};

