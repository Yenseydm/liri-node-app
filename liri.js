require("dotenv").config();

// var keys = require("./keys.js");

// var Spotify = require("node-spotify-api");

// var spotify = new Spotify(keys.spotify);



var command = process.argv[2];

switch (command) {

        case "concert-this":
                concert();
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

function concert() {
        if (command === "concert-this") {
                console.log("concert playing")
        }
};

function music() {

        if (command === "spotify-this-song") {
                console.log("rock on")
        }
};

function movies() {
        var axios = require("axios");
        var film = process.argv[3];

        var queryUrl = "http://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=trilogy";

        if (command === "movie-this") {

                axios.get("http://www.omdbapi.com/?t=" + film + "&y=&plot=short&apikey=trilogy").then(
                        function(response) {
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
                        .catch(function(error) {
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
                        console.log(queryUrl)
        }
};
function says() {
        if (command === "do-what-it-says") {
                console.log("do something please")
        }
};

