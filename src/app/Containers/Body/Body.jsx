import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FilmList from './FilmList.jsx';

import NavBar from '../../Components/NavBar.jsx';
import MovieCounter from '../../Components/MoiveCounter.jsx';

import PointBreakImg from '../../Images/Point Break.png';
import PulpFictionImg from '../../Images/Pulp Fiction.png';
import IcarusImg from '../../Images/Icarus.jpg';

import DB from '../../../core/data/Films.json';

(function imagePathSetter() {
  DB.films[0].poster_path = PulpFictionImg;
  DB.films[1].poster_path = PointBreakImg;
  DB.films[2].poster_path = IcarusImg;
})();

// Body holds the film list as state to pass down to children (MovieCounter and FilmList both need data from this state).
// BODY AS HOLDS SLECETED GENRE TO PASS DOWN TO BODY COMPONONETS.
const Body = (props) => {

    const [genreToRender, setGenreToRender] = useState('all');
    const [sortBy, setSortBy] = useState(null);

     const setDisplayGenre = (e) => {
        const genre = e.target.attributes[0].nodeValue;
        setGenreToRender(genre);
    }

    const numberOfGenre = (genre) => {
        const filmList = props.films;
        const filteredFilms = filmList.filter(film => film.genres.includes(genre));
        return genre === 'all' ? filmList.length : filteredFilms.length;
    }

    const handleOnSelect = (e) => {
        let sortCatagory = formatCatagory(e.target.value);
        setSortBy(sortCatagory);
    }

    const formatCatagory = (input) => {
        if (input === 'RATING') {return 'vote_average'}
        const letterArray = input.toLowerCase().split('')
        letterArray.forEach( (input, index, array) => input === ' ' ? array[index] = '_' : null )
        return letterArray.join('');
    }

    useEffect(()=>{
        setSortBy(formatCatagory(document.querySelector('.navBarWrapper select').value));
    })

    return (
        <main id='main'>
            <NavBar setDisplayGenre={setDisplayGenre} selectedGenre={genreToRender} handleOnSelect={handleOnSelect}/>
            <MovieCounter counter={numberOfGenre} selectedGenre={genreToRender} />
            <FilmList films={props.films} displayGenre={genreToRender} toggleShowFilmBody={props.toggleShowFilmBody} sortCatagory={sortBy}/>
        </main>
    )
}

Body.propTypes = {
  toggleShowFilmBody: PropTypes.func.isRequired,
};

export default Body;
