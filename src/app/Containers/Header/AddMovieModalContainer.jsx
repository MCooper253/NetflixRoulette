import React, { useState } from 'react';

import Modal from '../Modal/Modal.jsx';

import Button from '../../Components/Button.jsx';
import AddMovieForm from '../../Components/AddMovieForm.jsx';
import CongratsMessage from '../../Components/CongratsMessage.jsx';

const AddMovieModalContainer = () => {

    const [displayAddFilmModal, setDisplayAddFilmModal] = useState(false);
    const [displayConfirmModal, setDisplayConfirmModal] = useState(false);

    const showAddFilmModal = () => {
        setDisplayAddFilmModal(true);
    }

    const closeAddFilmModal = () => {
        setDisplayAddFilmModal(false);
    }

    const showConfirmModal = () => {
        setDisplayConfirmModal(true);
    }

    const closeConfirmModal = () => {
        setDisplayConfirmModal(false);
    }

    const onAddMovieSubmit = () => {
        closeAddFilmModal();
        showConfirmModal();
    }

    return (
        <>
        <Button caption='+ ADD MOVIE' onClick={showAddFilmModal} />
        {displayAddFilmModal ? (<Modal
            closeModal={closeAddFilmModal}
            title='ADD MOVIE'
            innerComp={<AddMovieForm
                onSubmit={onAddMovieSubmit}
            />}
        />) : null}
        {displayConfirmModal ? (
            <Modal
                closeModal={closeConfirmModal}
                title='CONGRATULATIONS!'
                innerComp={
                    <CongratsMessage />
                }
            />) : null}
        </>
    )
};

export default AddMovieModalContainer;
