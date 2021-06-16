import React from 'react';
import PropTypes from 'prop-types';

//film info is the compononet at the bottom of each film card
const FilmInfo = (props) => {

    return(
        <div className='filmInfo'>
            <div className='row'>
                <h4>{props.name}</h4>
                <button>{props.year}</button>
            </div>
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