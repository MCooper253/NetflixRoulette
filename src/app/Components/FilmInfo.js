import React from 'react';
import PropTypes from 'prop-types';

const FilmInfo = (props) => {

    return(
        <div className='filmInfo'>
            <h4>{props.name}</h4>
            <button>{props.year}</button>
            <p>{props.description}</p>
        </div>
    )
}

FilmInfo.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default FilmInfo;