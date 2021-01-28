import React from 'react';
import PropTypes from 'prop-types';

// film info is the compononet at the bottom of each film card
const FilmInfo = ({ name, year, description }) => (
  <div className="filmInfo">
    <h4>{name}</h4>
    <button type="button">{year}</button>
    <p>{description}</p>
  </div>
);

FilmInfo.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FilmInfo;
