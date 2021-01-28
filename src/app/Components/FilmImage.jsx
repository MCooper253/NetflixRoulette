/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const FilmImage = ({ img, toggleShowFilmBody, filmTitle }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <img
    alt="film_image"
    src={img}
    onClick={toggleShowFilmBody}
    title={filmTitle}
    className="filcard-image"
  />
);

FilmImage.propTypes = {
  img: PropTypes.string.isRequired,
  toggleShowFilmBody: PropTypes.func.isRequired,
  filmTitle: PropTypes.string.isRequired,
};

export default FilmImage;
