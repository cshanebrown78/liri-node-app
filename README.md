# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Steps to complete in order to use App

1. Clone repository

2. Use 'npm install <item to install>' to install the below
    * Axios
    * Node-Spotify-Api
    * Moment
    * DotEnv

3. The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

        * Along with this you will need to create a `.env` file, add the following to it, replacing the values with your API keys (no quotes) once you have them add the below to file:
             ```js
            # Spotify API keys

            SPOTIFY_ID=your-spotify-id
            SPOTIFY_SECRET=your-spotify-secret
            ```

## Liri Commands
   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

### What Each Command Will Do


1. `node liri.js concert-this <artist/band name here>`

   * This will show the following information about the artist/band in your terminal/bash window

     * Name of artist/band that was entered 
     * Name of the venue
     * Venue location
     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

    * This will show the following information about the song in your terminal/bash window

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

    * If no song is provided then a default to "The Sign" by Ace of Base will display.

3. `node liri.js movie-this '<movie name here>'`

    * This will output the following information to your terminal/bash window:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
    
4. `node liri.js do-what-it-says`

    * This will run whatever is in your random.txt file

    * Edit the text in random.txt to test out the feature for movie-this and concert-this.

### Liri also logs all of your searches to the log.txt file

### Link to a demonstration of the file

https://drive.google.com/file/d/1JI5N6eEJBf3-tGOMnbMxgtSRPViaf46E/view

### Have fun