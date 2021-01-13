import React from "react";

//Importing saved images will not work dynamically when users start adding their own movies with movie urls.
//These can be concideraed stock or fallback images.
import PulpFictionImg from '../Images/Pulp Fiction.png'
import PointBreakImg from '../Images/Point Break.png'

import NavBar from '../Components/NavBar.js'
import FilmList from './Body Containers/FilmList.js'
import MovieCounter from '../Components/MoiveCounter.js'

// Body holds the film list as state to pass down to children (MovieCounter and FilmList both need data from this state).
// BODY AS HOLDS SLECETED GENRE TO PASS DOWN TO BODY COMPONONETS.
class Body extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            genreToRender: 'crime',
            films: [{
                title: 'Pulp Fiction',
                tagline: 'foot massage',
                vote_average: '8.9',
                vote_count: '3294',
                release_date: '2004-12-29',
                poster_path: PulpFictionImg,
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                budget: '300000',
                revenue: '10000000',
                genres: ['crime'],
                id: '01'
            },
            {
                title: 'Point Break',
                tagline: 'surf n dolla bills',
                vote_average: '8.2',
                vote_count: '3224',
                release_date: '2000-12-29',
                poster_path: PointBreakImg,
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                budget: '200000',
                revenue: '1000000',
                genres: ['crime'],
                id: '02'
            },
        ]
        }

        this.setDisplayGenre = this.setDisplayGenre.bind(this);
        this.numberOfGenre = this.numberOfGenre.bind(this);
    }

    setDisplayGenre(e) {
        const genre = e.target.attributes[0].nodeValue;
        this.setState({ genreToRender: genre });
    }

    numberOfGenre(genre) {
        const filmList = this.state.films;
        const filteredFilms = filmList.filter(film => film.genres.includes(genre));
        return genre === 'all' ? filmList.length : filteredFilms.length;
    }

    render() {
        return (
            <main id='main'>
                <NavBar setDisplayGenre={this.setDisplayGenre} selectedGenre={this.state.genreToRender} />
                <MovieCounter counter={this.numberOfGenre} selectedGenre={this.state.genreToRender} />
                <FilmList films={this.state.films} displayGenre={this.state.genreToRender} />
            </main>
        )
    }
}

export default Body;