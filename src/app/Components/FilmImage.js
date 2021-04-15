import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showFilmBody } from '../Redux/actions.js';

const mapDispatchStateToProps = dispatch => ({
    showFilmBodyFunc: (film) => {dispatch(showFilmBody(film));}
})

const FilmImage = (props) => {

    console.log(props.img);

    return (
        <img src={ props.img } onClick={ () => props.showFilmBodyFunc(props.film) } title={props.filmTitle} className='filcard-image' />
    )
};

export default connect(null, mapDispatchStateToProps)(FilmImage);

FilmImage.propTypes = {
    img: PropTypes.string.isRequired,
    film: PropTypes.object.isRequired,
    filmTitle: PropTypes.string.isRequired
}