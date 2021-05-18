import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showFilmBody } from '../Redux/actions.js';

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
        <img src={ props.img } onClick={ handleOnClick } title={props.filmTitle} className='filcard-image' />
    )
};

export default connect(null, mapDispatchStateToProps)(FilmImage);

FilmImage.propTypes = {
    img: PropTypes.string.isRequired,
    film: PropTypes.object.isRequired,
    filmTitle: PropTypes.string.isRequired
}