import React from 'react';
import PropTypes from 'prop-types';

const FilmImage = (props) => {
  return (
    <img
      src={props.img}
      onClick={props.toggleShowFilmBody}
      title={props.filmTitle}
      className="filcard-image"
    />
  );
};

FilmImage.propTypes = {
  img: PropTypes.string.isRequired,
  toggleShowFilmBody: PropTypes.func.isRequired,
  filmTitle: PropTypes.string.isRequired,
};

export default FilmImage;
