import React from 'react';
import PropTypes from 'prop-types';

import FilmBodyImage from '../../Components/FilmBodyImage.jsx';
import FilmBodyInfo from '../../Components/FilmBodyInfo.jsx';

const FilmBody = ({ film }) => (
  <section className="film_body">
    <FilmBodyImage filmImage={film.poster_path} />
    <FilmBodyInfo film={film} />
  </section>
);

FilmBody.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmBody;
