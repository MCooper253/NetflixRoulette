import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilmInfo from '../../Components/FilmInfo.js';
import Button from '../../Components/Button.js';
import FilmImage from '../../Components/FilmImage.js';
import EditDelete from '../../Components/EditDelete.js';
import Modal from '../Modal.js';
import EditMovieForm from '../../Components/EditMovieForm.js';


const FilmCard = ({
        id,
        toggleShowFilmBody,
        pictureURL,
        name,
        year,
        genres,
        overview,
        runtime,
        descriptionShort,
        _film
    }) => {

        const [editButtonShown, setEditButtonShown] = useState(false);
        const [editMenueShown, setEditMenueShown] = useState(false);
        const [modalShown, setModalShown] = useState(false);
        const [deleteModalShown, setDeleteModalShown] = useState(false);

        const toggleEditButton = () => {
            if (modalShown || deleteModalShown) {return null};
            setEditButtonShown(!editButtonShown);
        }

        const toggleEditMenue = () => {
            if (modalShown || deleteModalShown) {return null};
            setEditMenueShown(!editMenueShown);
        }

        const toggleModal = () => {
            setModalShown(!modalShown);
        }
        
        const toggleDeleteModal = () => {
            setDeleteModalShown(!deleteModalShown);
        }

        const handleMouseLeave = () => {
            toggleEditButton();
            editMenueShown && toggleEditMenue();
        }

        return (
            <>
                <div className='image-container' onMouseEnter={toggleEditButton} onMouseLeave={handleMouseLeave}>

                    { editButtonShown ?
                        <Button 
                            onClick={toggleEditMenue}
                            caption=''
                            className='edit-button'
                            buttonId={`bt${id}`}
                        /> : null
                    }

                    { editMenueShown ? <EditDelete
                        toggleEditMenue={toggleEditMenue}
                        toggleModal={toggleModal}
                        toggleEditButton={toggleEditButton}
                        toggleDeleteModal={toggleDeleteModal} 
                    /> : null}

                    <FilmImage
                        toggleShowFilmBody={toggleShowFilmBody}
                        img={pictureURL}
                        filmTitle={name}
                        film={_film}
                    />

                </div>

                <FilmInfo
                    description={descriptionShort}
                    name={name}
                    year={year}
                />

            {modalShown && <Modal 
                title='EDIT MOVIE' closeModal={toggleModal}
                innerComp={<EditMovieForm
                    onSubmit={e=>e.preventDefault()}
                    filmName={name}
                    filmId={id}
                    filmYear={year}
                    filmGenres={genres}
                    filmPicturePath={pictureURL}
                    filmOverview={overview}
                    filmRuntime={runtime}
                />}
            />}
            {deleteModalShown && <Modal title='DELETE MOVIE' closeModal={toggleDeleteModal}/>}
            </>
        )
};

FilmCard.propTypes = {
    genres: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    pictureURL: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    _film: PropTypes.object.isRequired,
    toggleShowFilmBody: PropTypes.func.isRequired
}

export default FilmCard;