import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getMovies } from '../../Redux/thunk.js'
import FilmCard from './FilmCard.js'
import Modal from '../Modal.js'
import LoadingSpinner from '../../Components/LoadingSpinner.js'
import CongratsMessage from '../../Components/CongratsMessage.js'
import { toggleDeleteSuccessFilmModal, toggleDeleteFilmIsError, togglePostFilmIsError, togglePostFilmModal, toggleEditFilmIsError, toggleEditSuccessModal } from '../../Redux/actions.js'

const mapStateToProps = (state) => ({
        films: state.films.filmsArray,
        isLoading: state.apiState.isLoading,
        isError: state.apiState.isError,

        deleteSuccessModalShown: state.deleteFilm.showSuccessModal,
        deleteIsLoading: state.deleteFilm.isLoading,
        deleteIsError: state.deleteFilm.isError,

        showPostSuccessModal: state.postFilm.showSuccessModal,
        postSuccessIsLoading: state.postFilm.isLoading,
        postSuccessIsError: state.postFilm.isError,

        showEditSuccessModal: state.editFilm.showSuccessModal,
        editSuccessIsLoading: state.editFilm.isLoading,
        editSuccessIsError: state.editFilm.isError
    });



const mapDipatchStateToProps = dispatch => ({
    getMoviesFunc: (displayGenre, sortCatagory, offset) => {dispatch(getMovies(displayGenre, sortCatagory, offset));},

    toggleDeleteFilmModalFunc: () => {dispatch(toggleDeleteSuccessFilmModal());},
    toggleDeleteIsErrorModalFunc: () => {dispatch(toggleDeleteFilmIsError());},

    closePostSuccessModal: () => {dispatch(togglePostFilmModal())},
    closePostErrorModal: () => {dispatch(togglePostFilmIsError())},

    closeEditSuccessModal: () => {dispatch(toggleEditSuccessModal())},
    closeEditErrorModal: () => {dispatch(toggleEditFilmIsError())}
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

    const handleCloseEditModal = () => {
        props.closeEditSuccessModal();
        props.getMoviesFunc(props.displayGenre, props.sortCatagory);
    }

    const handleLoadMore = () => {
        props.getMoviesFunc(props.displayGenre, props.sortCatagory, props.films.length);
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
            { !props.isLoading && !props.isError ? 
                <>
                    <section className='filmList'> { renderingArray } </section> 
                    <div id='load_more_container'>
                        <button id='load_more' onClick={handleLoadMore}>Load More</button>
                    </div>
                </>
                : null
            }

            { props.isLoading ? <h2>LOADING</h2> : null }
            { props.isError && !props.isLoading ? <h2>AN ERROR OCCURED</h2> : null }

            { props.deleteSuccessModalShown && <Modal title='DELETE MOVIE' closeModal={handleCloseDeleteModal} innerComp={<p>This Movie has been removed from the database successfully.</p>}/> }
            { props.deleteIsLoading && <Modal title='Laoding' innerComp={<LoadingSpinner/>} /> }
            { props.deleteIsError && <Modal title='ERROR!' closeModal={props.toggleDeleteIsErrorModalFunc} /> }

            { props.showPostSuccessModal && <Modal closeModal={handleClosePostModal} title='CONGRATULATIONS!' innerComp={<CongratsMessage/>} /> }
            { props.postSuccessIsLoading && <Modal title='LOADING' innerComp={<LoadingSpinner />} /> }
            { props.postSuccessIsError && <Modal closeModal={props.closePostErrorModal} title='Error' innerComp={<p>There has been an error adding your movie to the database.</p>} />}

            { props.showEditSuccessModal && <Modal closeModal={handleCloseEditModal} title='SUCCESS!' innerComp={<p>This Movie has been updated in the database successfully.</p>} /> }
            { props.editSuccessIsLoading && <Modal title='LOADING' innerComp={<LoadingSpinner />} /> }
            { props.editSuccessIsError && <Modal closeModal={props.closeEditErrorModal} title='ERROR!' innerComp={<p>The has been an error upadating this movie in the database.</p>} />}
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