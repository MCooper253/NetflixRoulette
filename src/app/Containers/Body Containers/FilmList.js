import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../../Redux/thunk.js'
import FilmCard from './FilmCard.js'

const mapStateToProps = (store) => {
    return {  films: store.films }
}

const mapDispatchToProps = (dispatch, ownProps) => dispatch(getMovies(ownProps.displayGenre, ownProps.sortCatagory))

const FilmList = (props) => {

    //creates an array of JSX components for rendering
    
    const renderingArray = props.films.map(input => {
        const idCount=input.id
        return (
            <article key={input.id} id={idCount} className='filmCard'>
                <FilmCard
                    id={input.id}
                    pictureURL={input.poster_path}
                    descriptionShort={input.tagline}
                    name={input.title}
                    year={input.release_date}
                    genres={input.genres}
                    overview={input.overview}
                    runtime={input.runtime}
                    toggleShowFilmBody={props.toggleShowFilmBody}
                />
            </article>
        )
    });

    return (
        <section className='filmList'>
            {renderingArray}
        </section>
    )
}



FilmList.propTypes = {
    films: PropTypes.array.isRequired,
    displayGenre: PropTypes.string.isRequired,
    toggleShowFilmBody: PropTypes.func.isRequired,
    sortCatagory: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)