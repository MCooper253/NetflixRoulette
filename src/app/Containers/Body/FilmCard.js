import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EditDelete from "./EditDelete.js";

import Modal from "../Modal/Modal.js";
import EditMovieForm from "../Modal/EditMovieForm.js";

const FilmCard = ({ id, toggleShowFilmBody, pictureURL, name, year, genres, overview, runtime, descriptionShort }) => {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         editButtonShown: false,
    //         editMenueShown: false,
    //         modalShown: false,
    //         deleteModalShown: false,
    //     }

    //     this.toggleEditButton = this.toggleEditButton.bind(this);
    //     this.toggleEditMenue = this.toggleEditMenue.bind(this);
    //     this.toggleModal = this.toggleModal.bind(this);
    //     this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    // }

    const [editButtonShown, setEditButtonShown] = useState(false);
    const [editMenueShown, setEditMenueShown] = useState(false);
    const [modalShown, setModalShown] = useState(false);
    const [deleteModalShown, setDeleteModalShown] = useState(false);

    const toggleEditButton = () => {
        if (modalShown || deleteModalShown) {return null};
        setEditButtonShown(!editButtonShown);
    }
    this.setState({ editButtonShown: !this.state.editButtonShown });
  }

    const toggleEditMenue = () => {
        if (modalShown || deleteModalShown) {return null};
        setEditMenueShown(!editMenueShown);
    }
    this.setState({ editMenueShown: !this.state.editMenueShown });
  }

    const toggleModal = () => {
        setModalShown(!modalShown);
    }
    
    const toggleDeleteModal = () => {
        setDeleteModalShown(!deleteModalShown);
    }

    return (
        <>
            <div className='image-container' onMouseEnter={toggleEditButton} onMouseLeave={()=>{toggleEditButton(); editMenueShown && toggleEditMenue();}}>

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
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  pictureURL: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  toggleShowFilmBody: PropTypes.func.isRequired,
  descriptionShort: PropTypes.string.isRequired,
};

export default FilmCard;
