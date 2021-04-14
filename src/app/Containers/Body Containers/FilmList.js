import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../../Redux/thunk.js'
import FilmCard from './FilmCard.js'

const mapStateToProps = (state) => {
    return {  films: state.films }
    //this may also want isLoading and isError.
}

//const mapDispatchToProps = (dispatch, ownProps) => dispatch(getMovies(ownProps.displayGenre, ownProps.sortCatagory))

//keys are actions 

const mapDipatchStateToProps = dispatch => ({
    getMoviesFunc: (displayGenre, sortCatagory) => {dispatch(getMovies(displayGenre, sortCatagory));console.log('getMoviesFunc has run.')}
})


const FilmList = (props) => {

    //API call only gets call when a change to sort catagory or 
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

export default connect(mapStateToProps, mapDipatchStateToProps)(FilmList)