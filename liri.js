require("dotenv").config();

var keys = require("./keys.js");

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
        var axios = require("axios");
        var artist = process.argv[3];

        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        if (command === "concert-this") {

                axios.get(queryUrl).then(
                        function (response) {
                                for (i = 0; i < response.data.length; i++) {
                                        console.log("------------------------------");
                                        console.log("Artist: " + response.data[i].lineup);
                                        console.log("Venue: " + response.data[i].venue.name)
                                        console.log("Event Date: " + response.data[i].datetime);
                                        console.log("------------------------------")
                                }
                        }).catch(function (error) {
                                console.error('Error occurred: ' + error);
                        });
        }
};

//Spotify API
function music() {
        var Spotify = require("node-spotify-api");

        var spotify = new Spotify(keys.spotify);

        var songs = process.argv[3];

        if (command === "spotify-this-song") {
        
        spotify
        .search({ type: 'track', query: songs })
        .then(function(response) {
        //   console.log("Artist: ");
        //   console.log("Song: ");
        //   console.log("Album: ")
        //   console.log("Preview: ");

        console.log(JSON.stringify(response.tracks))
          
        })
        .catch(function(err) {
          console.log(err);
        });

        }
};


// OMDB Axios
function movies() {
        var axios = require("axios");
        var film = process.argv[3];

        var queryUrl = "http://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=trilogy";

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
                        .catch(function (error) {
                                if (error.response) {
                                        console.log("---------------Data---------------");
                                        console.log(error.response.data);
                                        console.log("---------------Status---------------");
                                        console.log(error.response.status);
                                        console.log("---------------Status---------------");
                                        console.log(error.response.headers);
                                } else if (error.request) {
                                        console.log(error.request);
                                } else {
                                        console.log("Error", error.message);
                                }
                                console.log(error.config);
                        });
        }
};


function says() {
        if (command === "do-what-it-says") {
                console.log("do something please")
        }
};

