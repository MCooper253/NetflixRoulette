import React, { useState } from 'react';
import { connect } from 'react-redux'

import Button from '../../Components/Button.js';
import Modal from '../Modal.js';
import AddMovieForm from '../../Components/AddMovieForm.js'
import CongratsMessage from '../../Components/CongratsMessage.js'
import LoadingSpinner from '../../Components/LoadingSpinner.js'
import PostFilmErrorModalBody from '../../Components/PostFilmErrorModalBody.js' 
import { togglePostFilmModal, togglePostFilmIsError } from '../../Redux/actions.js'

const mapStateToProps = (state) => ({
        showPostSuccessModal: state.postFilm.showSuccessModal,
        postSuccessIsLoading: state.postFilm.isLoading,
        postSuccessIsError: state.postFilm.isError
    });

const mapDispatchStateToProps = dispatch => ({
    closePostSuccessModal: () => {dispatch(togglePostFilmModal())},
    closePostErrorModal: () => {dispatch(togglePostFilmIsError())}
});

const AddMovieModalContainer = (props) => {

    const [displayAddFilmModal, setDisplayAddFilmModal] = useState(false);

    const showAddFilmModal = () => {
        setDisplayAddFilmModal(true);
    }

    const closeAddFilmModal = () => {
        setDisplayAddFilmModal(false);
    }

    return (
        <>
        <Button caption='+ ADD MOVIE' onClick={showAddFilmModal} />
        {displayAddFilmModal ? (
            <Modal
                closeModal={closeAddFilmModal}
                title='ADD MOVIE'
                innerComp={<AddMovieForm
                    onSubmit={closeAddFilmModal}
                />}
            />
        ) : null}

        {props.showPostSuccessModal && <Modal closeModal={props.closePostSuccessModal} title='CONGRATULATIONS!' innerComp={<CongratsMessage/>} /> }
        {props.postSuccessIsLoading && <Modal title='LOADING' innerComp={<LoadingSpinner />} /> }
        {props.postSuccessIsError && <Modal closeModal={props.closePostErrorModal} title='Error' innerComp={<PostFilmErrorModalBody />} />}

        </>
    )
};

export default connect(mapStateToProps, mapDispatchStateToProps)(AddMovieModalContainer);