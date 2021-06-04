import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../../Redux/thunk.js'
import FilmCard from './FilmCard.js'
import Modal from '../Modal.js'
import LoadingSpinner from '../../Components/LoadingSpinner.js'
import CongratsMessage from '../../Components/CongratsMessage.js'
import { toggleDeleteSuccessFilmModal, toggleDeleteFilmIsError, togglePostFilmIsError, togglePostFilmModal } from '../../Redux/actions.js'

const mapStateToProps = (state) => ({
        films: state.films.filmsArray,
        isLoading: state.apiState.isLoading,
        isError: state.apiState.isError,

        deleteSuccessModalShown: state.deleteFilm.showSuccessModal,
        deleteIsLoading: state.deleteFilm.isLoading,
        deleteIsError: state.deleteFilm.isError,

        showPostSuccessModal: state.postFilm.showSuccessModal,
        postSuccessIsLoading: state.postFilm.isLoading,
        postSuccessIsError: state.postFilm.isError
    });



const mapDipatchStateToProps = dispatch => ({
    getMoviesFunc: (displayGenre, sortCatagory) => {dispatch(getMovies(displayGenre, sortCatagory));},

    toggleDeleteFilmModalFunc: () => {dispatch(toggleDeleteSuccessFilmModal());},
    toggleDeleteIsErrorModalFunc: () => {dispatch(toggleDeleteFilmIsError());},

    closePostSuccessModal: () => {dispatch(togglePostFilmModal())},
    closePostErrorModal: () => {dispatch(togglePostFilmIsError())}
})

//screen and viewport interaction - for more laoding??


const FilmList = (props) => {

    useEffect(
        () => props.getMoviesFunc(props.displayGenre, props.sortCatagory),
        [props.sortCatagory, props.displayGenre]
    );

    const handleCloseDeleteModal = () => {
        props.toggleDeleteFilmModalFunc();
        props.getMoviesFunc(props.displayGenre, props.sortCatagory);
    }

    const handleClosePostModal = () => {
        props.closePostSuccessModal();
        props.getMoviesFunc(props.displayGenre, props.sortCatagory);
    }

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

            { props.deleteSuccessModalShown && <Modal title='DELETE MOVIE' closeModal={handleCloseDeleteModal} innerComp={<p>This Movie has been removed from the database successfully.</p>}/> }
            { props.deleteIsLoading && <Modal title='Laoding' innerComp={<LoadingSpinner/>} /> }
            { props.deleteIsError && <Modal title='There has bene an error.' closeModal={props.toggleDeleteIsErrorModalFunc} /> }

            {props.showPostSuccessModal && <Modal closeModal={handleClosePostModal} title='CONGRATULATIONS!' innerComp={<CongratsMessage/>} /> }
            {props.postSuccessIsLoading && <Modal title='LOADING' innerComp={<LoadingSpinner />} /> }
            {props.postSuccessIsError && <Modal closeModal={props.closePostErrorModal} title='Error' innerComp={<PostFilmErrorModalBody />} />}
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