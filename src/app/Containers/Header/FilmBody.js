import React from 'react';
import PropTypes from 'prop-types';

import FilmBodyImage from '../../Components/FilmBodyImage.js';
import FilmBodyInfo from '../../Components/FilmBodyInfo.js';

const FilmBody = (props) => {
  return (
    <section className="film_body">
      <FilmBodyImage filmImage={props.film.poster_path} />
      <FilmBodyInfo film={props.film} />
    </section>
  );
};

FilmBody.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmBody;
