import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Components/Button.js';

import ModalDropdown from "../Components/ModalDropdown.js";

const EditMovieForm = (props) => {

    const [selectOptionsShown, setSelectOptionsShown] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState(props.filmGenres);
    const [actionSelected, setActionSelected] = useState(props.filmGenres.includes('action') ? true : false);
    const [horrorSelected, setHorrorSelected] = useState(props.filmGenres.includes('horror') ? true : false);
    const [crimeSelected, setCrimeSelected] = useState(props.filmGenres.includes('crimer') ? true : false);
    const [documentarySelected, setDocumentarySelected] = useState(props.filmGenres.includes('documentary') ? true : false);

    const toggleDropdown = () => {
        setSelectOptionsShown(!selectOptionsShown);

    }

    const toggleGenreState = (e) => {
        const genre = e.target.title;
        const checkboxBackground = document.querySelectorAll(`li[title="${genre}"] img`)[0]; //selects the chekbox image

        //toggles the genre in the input feild in the UI.
        switch (genre) {
            case 'action':
                !actionSelected ? setSelectedGenres(selectedGenres.concat('action')) : setSelectedGenres(selectedGenres.filter(input => input !== 'action'));
                break;
            case 'horror':
                !horrorSelected ? setSelectedGenres(selectedGenres.concat('horror')) : setSelectedGenres(selectedGenres.filter(input => input !== 'horror'))
                break;
            case 'crime':
                !crimeSelected ? setSelectedGenres(selectedGenres.concat('crime')) : setSelectedGenres(selectedGenres.filter(input => input !== 'crime'))
                break;
            case 'documentary':
                !documentarySelected ? setSelectedGenres(selectedGenres.concat('documentary')) : setSelectedGenres(selectedGenres.filter(input => input !== 'documentary'))
                break;
            default:
                null;
        }

        //toggles the genreSelected state
        switch (genre) {
            case 'action':
                setActionSelected(!actionSelected);
                break;
            case 'horror':
                setHorrorSelected(!horrorSelected);
                break;
            case 'crime':
                setCrimeSelected(!crimeSelected);
                break;
            case 'documentary':
                setDocumentarySelected(!documentarySelected);
                break;
            default:
                null;
        }
    }

    const updateDisplayedGenres = (genreList) => {

        // THIS FUNCTION TAKES THE ARRAY STORED IN STATE, FORMATS AND DISPLAYS IT IN THE APP.
        if (genreList.length !== 0) {
            let arrayToDisplay = [];
            document.getElementsByClassName('genres-select-button')[0].style.color = 'white';
            genreList.forEach(element => {
                let genre = element.split('');
                genre[0] = genre[0].toUpperCase();
                arrayToDisplay.push(genre.join(''));
            });

            document.getElementsByClassName('genres-select-button')[0].innerHTML = arrayToDisplay.join(', ');
        } else {
            document.getElementsByClassName('genres-select-button')[0].innerHTML = 'Select genres';
            document.getElementsByClassName('genres-select-button')[0].style.color = 'rgba(255, 255, 255, 0.3)';
        }
    }

    useEffect(() => {
        updateDisplayedGenres(selectedGenres);
    })

    return (
        <form onSubmit={props.onSubmit}>
            <label>MOVIE ID</label><br />
            <p>{props.filmId}</p><br />
            <label>TITLE</label><br />
            <input type='text' placeholder='Title' defaultValue={props.filmName} /><br />
            <label>RELEASE DATE</label><br />
            <input type='text' placeholder='Select date' defaultValue={props.filmYear} /><br />
            <label>MOVIR URL</label><br />
            <input type='text' placeholder='Movie URL here' defaultValue={props.filmPicturePath} /><br />
            <label>GENRE</label><br />
            <div className='custom-select'>
                <Button onClick={toggleDropdown} className='genres-select-button' caption='Select genres' />
                {selectOptionsShown && <ModalDropdown
                    toggleGenreState={toggleGenreState}
                    horrorState={horrorSelected}
                    crimeState={crimeSelected}
                    actionState={actionSelected}
                    documentaryState={documentarySelected}
                />}
            </div>
            <label>OVERVIEW</label><br />
            <input type='text' placeholder='Overview here' defaultValue={props.filmOverview} /><br />
            <label>RUNTIME</label><br />
            <input type='text' placeholder='Runtime here' defaultValue={props.filmRuntime} /><br />
            <input type='submit' value='CONFIRM' />
            <input type='button' value='RESET' />
        </form>
    )
}

EditMovieForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    filmId: PropTypes.string.isRequired,
    filmName: PropTypes.string.isRequired,
    filmYear: PropTypes.string.isRequired,
    filmGenres: PropTypes.array.isRequired,
    filmPicturePath: PropTypes.string.isRequired,
    filmOverview: PropTypes.string.isRequired,
    filmRuntime: PropTypes.string.isRequired,
};

export default EditMovieForm;
