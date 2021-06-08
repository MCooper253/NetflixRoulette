import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactImageFallback from "react-image-fallback";

import { showFilmBody } from '../Redux/actions.js';
import placeholder from '../Images/film-poster-placeholder.png'

const mapDispatchStateToProps = dispatch => ({
    showFilmBodyFunc: (film) => {dispatch(showFilmBody(film));}
})

const FilmImage = (props) => {

    const handleOnClick = () => {
        props.showFilmBodyFunc(props.film);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    };

    return (
        <ReactImageFallback src={ props.img } fallbackImage={ placeholder } onClick={ handleOnClick } title={props.filmTitle} className='filcard-image' />
    )
};

export default connect(null, mapDispatchStateToProps)(FilmImage);

FilmImage.propTypes = {
    img: PropTypes.string.isRequired,
    film: PropTypes.object.isRequired,
    filmTitle: PropTypes.string.isRequired
}