import React from "react";
import PropTypes from 'prop-types';

const MovieCounter = (props) => {

    return(
        <p><span>{props.count.toString()}</span> movies found</p>
    );
};

MovieCounter.propTypes = {
    count: PropTypes.number.isRequired
};

export default MovieCounter;