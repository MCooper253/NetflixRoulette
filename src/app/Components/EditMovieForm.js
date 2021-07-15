import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../Components/Button.js';
import ModalDropdown from '../Components/ModalDropdown.js';
import { editMovie } from '../Redux/thunk.js';

const mapDipatchStateToProps = dispatch => ({
    editMovieFunc: (film) => {dispatch(editMovie(film));}
})

const EditMovieForm = (props) => {

    const[selectOptionsShown, setSelectOptionsShown] = useState(false);
    const[selectedGenres, setSelectedGenres] = useState(props.filmGenres);
    const[actionSelected, setActionSelected] = useState(props.filmGenres.includes('action') ? true : false);
    const[horrorSelected, setHorrorSelected] = useState(props.filmGenres.includes('horror') ? true : false);
    const[crimeSelected, setCrimeSelected] = useState(props.filmGenres.includes('crimer') ? true : false);
    const[documentarySelected, setDocumentarySelected] = useState(props.filmGenres.includes('documentary') ? true : false);
    
    const toggleDropdown = () => {
        setSelectOptionsShown(!selectOptionsShown);

    }

    const toggleGenreState = (e) => {
        const genre = e.target.title;
        const checkboxBackground = document.querySelectorAll(`li[title="${genre}"] img`)[0]; //selects the chekbox image

        //toggles the genre in the input feild in the UI.
        switch (genre) {
            case 'action':
                !actionSelected ? setSelectedGenres(selectedGenres.concat('action')) : setSelectedGenres(selectedGenres.filter(input => input!=='action'))
                break;
            case 'horror':
                !horrorSelected ? setSelectedGenres(selectedGenres.concat('horror')) : setSelectedGenres(selectedGenres.filter(input => input!=='horror'))
                break;
            case 'crime':
                !crimeSelected ? setSelectedGenres(selectedGenres.concat('crime')) : setSelectedGenres(selectedGenres.filter(input => input!=='crime'))
                break;
            case 'documentary':
                !documentarySelected ? setSelectedGenres(selectedGenres.concat('documentary')) : setSelectedGenres(selectedGenres.filter(input => input!=='documentary'))
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
        if (genreList.length !== 0)  {
            let arrayToDisplay = [];
            document.getElementsByClassName('genres-select-button')[0].style.color = 'white';
            genreList.forEach(element => {
                let genre = element.split('');
                genre[0] = genre[0].toUpperCase();
                arrayToDisplay.push(genre.join(''))
            })

            document.getElementsByClassName('genres-select-button')[0].innerHTML = arrayToDisplay.join(', ');
        } else {
            document.getElementsByClassName('genres-select-button')[0].innerHTML = 'Select genres';
            document.getElementsByClassName('genres-select-button')[0].style.color = 'rgba(255, 255, 255, 0.3)';
        };
    }

    useEffect(() => {
        updateDisplayedGenres(selectedGenres);
    })

    const handleFormSubmission = e => {

        e.preventDefault()

        const formEntires = props._film;
        document.querySelectorAll('form#edit_movie_form input[name]').forEach(input => {
            formEntires[input.name] = input.value
        })
        formEntires.genres = selectedGenres.map(input => {
            return input.charAt(0).toUpperCase() + input.slice(1);
        })
        formEntires.runtime = parseInt(formEntires.runtime, 10)
        Object.keys(formEntires).forEach(input => {
            if (formEntires[input] === "") {formEntires[input] = 'default' }
        })
        props.editMovieFunc(formEntires);

        props.onSubmit()
    }

    return (
        <form onSubmit={handleFormSubmission} id='edit_movie_form'>
            <label>MOVIE ID</label><br />
            <p>{props.filmId}</p><br />
            <label>TITLE</label><br />
            <input type='text' placeholder='Title' name='title' defaultValue={props.filmName}/><br />
            <label>RELEASE DATE</label><br />
            <input type='text' placeholder='Select date' name='release_date' defaultValue={props.filmYear}/><br />
            <label>MOVIE POSTER URL</label><br />
            <input type='text' placeholder='Poster URL here' name='poster_path' defaultValue={props.filmPicturePath} /><br />
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
            <input type='text' placeholder='Overview here' name='overview' defaultValue={props.filmOverview}/><br />
            <label>RUNTIME</label><br />
            <input type='text' placeholder='Runtime here' name='runtime' defaultValue={props.filmRuntime}/><br />
            <input type='submit' value='CONFIRM' /> 
            <input type='button' value='RESET' />
        </form>
    )
}

EditMovieForm.propTypes = {
    onSubmit: PropTypes.func,
    filmId: PropTypes.number.isRequired,
    filmName: PropTypes.string,
    filmYear: PropTypes.string,
    filmGenres: PropTypes.array,
    filmPicturePath: PropTypes.string,
    filmOverview: PropTypes.string,
    filmRuntime: PropTypes.string
}

export default connect(null, mapDipatchStateToProps)(EditMovieForm);