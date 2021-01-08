import { propTypes } from 'focus-trap-react/dist/focus-trap-react';
import React from 'react';
import PropTypes from 'prop-types';

const FilmImage = (props) => {

    return (
            <img src={props.img} />
    )
};

export default FilmImage;

FilmImage.propTypes = {
    img: PropTypes.string.isRequired
}