import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Components/Button.js'

import ModalDropdown from '../Components/ModalDropdown.js'

class AddMovieForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectOptionsShown: false,
            selectedGenres: [],
            actionSelected: false,
            horrorSelected: false,
            crimeSelected:  false,
            documentarySelected: false,
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleGenreState = this.toggleGenreState.bind(this);
        this.updateDisplayedGenres = this.updateDisplayedGenres.bind(this);
    }

    toggleDropdown (e) {
        e.preventDefault()
        this.setState({selectOptionsShown: !this.state.selectOptionsShown})
    }

    toggleGenreState (e) {
        const genre = e.target.title;
        const checkboxBackground = document.querySelectorAll(`li[title="${genre}"] img`)[0]; //selects the chekbox image

        //toggles the genreSelected state
        this.setState({[`${genre}Selected`]: !this.state[`${genre}Selected`]})

        !this.state[`${genre}Selected`] ?
            // THIS LINE ADDS TO THE SELECTED GENRES ARRAY
            this.setState({selectedGenres: this.state.selectedGenres.concat(genre)}):
            // THIS LINE REMOVES FROM THE SELECTED VECTOR ARRAY
            this.setState({selectedGenres: this.state.selectedGenres.filter(input => input !== genre)});

        //The below statement is negated (oposed to how you think the logic should be) as it runs before the state is changed becasue .setState is async.
        !this.state[`${genre}Selected`] ? checkboxBackground.style.backgroundColor='#F65261' : checkboxBackground.style.backgroundColor='white';
    }

    updateDisplayedGenres (genreList) {

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

    componentDidUpdate() {

        this.updateDisplayedGenres(this.state.selectedGenres);
    }

    componentDidMount() {
        
        // THIS ENSURES THAT THE UI IS DISPLAYING WHAT CATAGORIES THE FILM IS ALREADY IN.
        this.state.actionSelected ? this.setState({selectedGenres: this.state.selectedGenres.concat('action')}) : null
        this.state.documentarySelected ? this.setState({selectedGenres: this.state.selectedGenres.concat('documentary')}) : null
        this.state.crimeSelected ? this.setState({selectedGenres: this.state.selectedGenres.concat('crime')}) : null
        this.state.horrorSelected ? this.setState({selectedGenres: this.state.selectedGenres.concat('horror')}) : null
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>TITLE</label><br />
                <input type='text' placeholder='Film title here' /><br />
                <label>RELEASE DATE</label><br />
                <input type='text' placeholder='Select date' /><br />
                <label>MOVIR URL</label><br />
                <input type='text' placeholder='Movie URL here' /><br />
                <label>GENRE</label><br />
                <div className='custom-select'>
                    <Button onClick={this.toggleDropdown} className='genres-select-button' caption='Select genres' />
                    {this.state.selectOptionsShown && <ModalDropdown
                        toggleGenreState={this.toggleGenreState}
                        horrorState={this.state.horrorSelected}
                        crimeState={this.state.crimeSelected}
                        actionState={this.state.actionSelected}
                        documentaryState={this.state.documentarySelected}
                    />}
                </div>
                <label>OVERVIEW</label><br />
                <input type='text' placeholder='Overview here' /><br />
                <label>RUNTIME</label><br />
                <input type='text' placeholder='Runtime here' /><br />
                <input type='submit' value='CONFIRM' /> 
                <input type='button' value='RESET' />
            </form>
        )
    }
}

AddMovieForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default AddMovieForm;