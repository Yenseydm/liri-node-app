# liri-node-app
A Language Interpretation and Recognition Interface (LIRI) node app that takes in commands that retrieves information from Spotify API, OMDB and Bands in Town Axios.

Commands include: "concert-this", "spotify-this-song", "movie-this", and "do-what-it-says".

"concert-this" retrieves information from the OMDB API using axios. When user inputs:
              node liri.js concert-this <artist+name>
to the console, then the information printed to console will include the name of the venue the artist will play, location, and date of event. However, if the user does not input an artist's name then the default is to show artist Celine Dion.

![Concert-this](https://github.com/Yenseydm/liri-node-app/blob/master/concert-this.gif)

"spotify-this-song" retrieves information from the Spotify API. When user inputs:
           node liri.js spotify-this-song <'song name'>
to the console, then the information printed will include the artist, song, album and a link to a preview of the song (if available). If no song is written, the the default song is "The Sign" by Ace of Base.

![Spotify-this-song](https://github.com/Yenseydm/liri-node-app/blob/master/spotify-this-song.gif)

"movie-this" retrieves information from the Bands in Town using axios. When user inputs:
           node liri.js movie-this <movie+name>
to the console, then the information printed will include the title, year, rating, rotten tomatoes rating, country, language, plot and actors. If no movie is written, the the default song is "Mr. Nobody".

![movie-this](https://github.com/Yenseydm/liri-node-app/blob/master/movie-this.gif)

"do-what-it-says" retrieves information from the random.txt using fs. When user inputs:
           node liri.js do-what-it-says
to the console, the information printed should have been the song "I Want it that Way" and its information from an external file.

