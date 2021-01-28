import React from 'react';
import PropTypes from 'prop-types';

import I18N from '../../core/I18N';

// Logo is as simple as you may imagine. A re-usable compononet.
const FilmBodyInfo = ({ film }) => (
  <article>
    <h1>
      {film.title}
      <div id="vote_container">{film.vote_average}</div>
    </h1>
    <p>{film.tagline}</p>
    <h2>
      {`${film.release_date} `}
      <span>{`${film.runtime} ${I18N[process.env.LANG].MIN}`}</span>
    </h2>
    <p>{film.overview}</p>
  </article>
);

FilmBodyInfo.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmBodyInfo;
