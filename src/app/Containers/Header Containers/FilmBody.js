import React from 'react';
import PropTypes from 'prop-types';

import FilmBodyImage from '../../Components/FilmBodyImage.js';
import FilmBodyInfo from '../../Components/FilmBodyInfo.js';

//Film Details Page
const FilmBody = (props) => {

    return (
        <section className='film_body'>
        <FilmBodyImage filmImage={props.film.film.poster_path} />
        <FilmBodyInfo film={props.film.film} />
        </section>
    );
};

FilmBody.porpTypes = {
    film: PropTypes.object.isRequired
};

export default FilmBody;