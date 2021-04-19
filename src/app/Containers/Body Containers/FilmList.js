import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../../Redux/thunk.js'
import FilmCard from './FilmCard.js'

const mapStateToProps = (state) => {
    return {
        films: state.films.filmsArray,
        isLoading: state.apiState.isLoading,
        isError: state.apiState.isError
    }
}



const mapDipatchStateToProps = dispatch => ({
    getMoviesFunc: (displayGenre, sortCatagory) => {dispatch(getMovies(displayGenre, sortCatagory));}
})

//screen and viewport interaction - for more laoding??


const FilmList = (props) => {

    useEffect(
        () => props.getMoviesFunc(props.displayGenre, props.sortCatagory),
        [props.sortCatagory, props.displayGenre]
    );

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
                    _film={input}
                />
            </article>
        )
    });

    return (
        <>
            { !props.isLoading && !props.isError ? <section className='filmList'> { renderingArray } </section> : null }
            { props.isLoading ? <h2>LOADING</h2> : null }
            { props.isError && !props.isLoading ? <h2>AN ERROR OCCURED</h2> : null }
        </>
    )
}



FilmList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    films: PropTypes.array.isRequired,
    displayGenre: PropTypes.string.isRequired,
    toggleShowFilmBody: PropTypes.func.isRequired,
    sortCatagory: PropTypes.any
}

export default connect(mapStateToProps, mapDipatchStateToProps)(FilmList)