import React from 'react';

const FilmCard = (props) => {

    return(
        <article>
            <h4>{props.name}</h4>
            <button>{props.year}</button>
            <p>{props.description}</p>
        </article>
    )
}

export default FilmCard;