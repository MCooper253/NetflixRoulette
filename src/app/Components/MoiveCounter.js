import React from "react";
import PropTypes from 'prop-types';

//Movie counter is a direct child of the Body container and takes a prop from it.
const MovieCounter = (props) => {

    return(
        <p><span>{props.count.toString()}</span> movies found</p>
    );
};

MovieCounter.propTypes = {
    count: PropTypes.number.isRequired
};

export default MovieCounter;