import React, { useState } from 'react';

import Button from '../../Components/Button/index.js';
import Modal from '../Modal.js';
import AddMovieForm from '../../Components/AddMovieForm.js'

const AddMovieModalContainer = () => {

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
        </>
    )
};

export default AddMovieModalContainer;