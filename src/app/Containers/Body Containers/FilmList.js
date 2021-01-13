import PropTypes from 'prop-types'
import React from 'react'

import FilmCard from './FilmCard.js'


//This is a conatiner that maps over film list (accepted as props) and returns all the film cards.
//In the future the 'film card image' could do with being exported as a different component to tidy this up. 
const FilmList = (props) => {

    return (
        <section className='filmList'>
            {props.films.map((input)=>{
                const idCount=input.id
                // RETURENS CONDITIONALLY ON STATE
                if ( input.genres.includes(props.displayGenre) || props.displayGenre === 'all' ) {
                    return (
                        //returns the film cards with film info and image.
                        <article key={input.id} id={idCount} className='filmCard'>
                            <FilmCard
                                id={input.id}
                                pictureURL={input.poster_path}
                                descriptionShort={input.tagline}
                                name={input.title}
                                year={input.release_date}
                            />
                        </article>
                    )
                };
            })}
        </section>
    )
}

FilmList.propTypes = {
    films: PropTypes.array.isRequired,
    displayGenre: PropTypes.string.isRequired
}

export default FilmList;