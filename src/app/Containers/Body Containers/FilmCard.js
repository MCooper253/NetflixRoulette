import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmInfo from '../../Components/FilmInfo.js';
import Button from '../../Components/Button/index.js';
import FilmImage from '../../Components/FilmImage.js';
import EditDelete from '../../Components/EditDelete.js';
import Modal from '../Modal.js';
import EditMovieForm from '../../Components/EditMovieForm.js';
import { deleteMovie } from '../../Redux/thunk';

const mapDipatchStateToProps = dispatch => ({
    toggleDeleteFilmFunc: (id) => {dispatch(deleteMovie(id))}
})

const FilmCard = (props) => {

        const [editButtonShown, setEditButtonShown] = useState(false);
        const [editMenueShown, setEditMenueShown] = useState(false);
        const [modalShown, setModalShown] = useState(false);
        //const [deleteModalShown, setDeleteModalShown] = useState(false);

        const toggleEditButton = () => {
            if (modalShown || props.deleteSuccessModalShown) {return null};
            setEditButtonShown(!editButtonShown);
        }

        const toggleEditMenue = () => {
            if (modalShown || props.deleteSuccessModalShown) {return null};
            setEditMenueShown(!editMenueShown);
        }

        const toggleModal = () => {
            setModalShown(!modalShown);
        }
        
        const deleteFilm = () => {
            props.toggleDeleteFilmFunc(props.id);
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
                        /> : null
                    }

                    { editMenueShown ? <EditDelete
                        toggleEditMenue={toggleEditMenue}
                        toggleModal={toggleModal}
                        toggleEditButton={toggleEditButton}
                        toggleDeleteModal={deleteFilm} 
                    /> : null}

                    <FilmImage
                        toggleShowFilmBody={props.toggleShowFilmBody}
                        img={props.pictureURL}
                        filmTitle={props.name}
                        film={props._film}
                    />

                </div>

                <FilmInfo
                    description={props.descriptionShort}
                    name={props.name}
                    year={props.year}
                />

            {modalShown && <Modal 
                title='EDIT MOVIE' closeModal={toggleModal}
                innerComp={<EditMovieForm
                    onSubmit={toggleModal}
                    filmName={props.name}
                    filmId={props.id}
                    filmYear={props.year}
                    filmGenres={props.genres}
                    filmPicturePath={props.pictureURL}
                    filmOverview={props.overview}
                    filmRuntime={props.runtime}
                    _film={props._film}
                />}
            />}
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
    _film: PropTypes.object.isRequired,
}

export default connect(null, mapDipatchStateToProps)(FilmCard);