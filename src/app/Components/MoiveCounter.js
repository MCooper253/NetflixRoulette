import React from 'react';
import PropTypes from 'prop-types';


import I18N from '../../core/I18N';

//Movie counter is a direct child of the Body container and takes a prop from it.
const MovieCounter = (props) => {
  return (
    <p>
      <span>{props.counter(props.selectedGenre)}</span>  {I18N.EN.MOVIES_FOUND}
    </p>
  );
};

MovieCounter.propTypes = {
  counter: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieCounter;
