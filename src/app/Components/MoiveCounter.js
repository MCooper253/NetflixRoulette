import React from "react";
import PropTypes from "prop-types";

//Movie counter is a direct child of the Body container and takes a prop from it.
const MovieCounter = (props) => {
  return (
    <p>
      <span>{props.counter(props.selectedGenre)}</span> movies found
    </p>
  );
};

MovieCounter.propTypes = {
  counter: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};

export default MovieCounter;
