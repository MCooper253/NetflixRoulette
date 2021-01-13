import React from 'react';
import PropTypes from 'prop-types';

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
        }

        this.setDisplayGenre = this.setDisplayGenre.bind(this);
        this.numberOfGenre = this.numberOfGenre.bind(this);
    }

    setDisplayGenre(e) {
        const genre = e.target.attributes[0].nodeValue;
        this.setState({ genreToRender: genre });
    }

    numberOfGenre(genre) {
        const filmList = this.props.films;
        const filteredFilms = filmList.filter(film => film.genres.includes(genre));
        return genre === 'all' ? filmList.length : filteredFilms.length;
    }

    render() {
        return (
            <main id='main'>
                <NavBar setDisplayGenre={this.setDisplayGenre} selectedGenre={this.state.genreToRender} />
                <MovieCounter counter={this.numberOfGenre} selectedGenre={this.state.genreToRender} />
                <FilmList films={this.props.films} displayGenre={this.state.genreToRender} toggleShowFilmBody={this.props.toggleShowFilmBody} />
            </main>
        )
    }
}

Body.propTypes = {
    toggleShowFilmBody: PropTypes.func.isRequired,
}

export default Body;