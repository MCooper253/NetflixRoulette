import React from 'react';
import PropTypes from 'prop-types';

import I18N from '../../core/I18N.js'

//Logo is as simple as you may imagine. A re-usable compononet.
const FilmBodyInfo = (props) => {
  return (
    <article>
      <h1>
        {props.film.title}
        <div id="vote_container">{props.film.vote_average}</div>
      </h1>
      <p>{props.film.tagline}</p>
      <h2>
        {props.film.release_date} <span>{props.film.runtime} {I18N.EN.MIN}</span>
      </h2>
      <p>{props.film.overview}</p>
    </article>
  );
};

FilmBodyInfo.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmBodyInfo;
