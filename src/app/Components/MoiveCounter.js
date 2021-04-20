import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        count: state.films.numberOfFilms
    }
}

const MovieCounter = (props) => {

    return(
        <p><span>{props.count}</span> movies found</p>
    );
};

MovieCounter.propTypes = {
    counter: PropTypes.func.isRequired,
    selectedGenre: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(MovieCounter);