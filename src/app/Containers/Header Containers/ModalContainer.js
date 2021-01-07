import React from 'react';
import disableScroll from 'disable-scroll';

import Button from '../../Components/Button.js';
import Modal from '../../Components/Modal.js';
import AddMovieForm from '../../Components/AddMovieForm.js'

class ModalContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { displayAddFilmModal: false, showConfirmModal: false }; // set false for productoin

        this.showAddFilmModal = this.showAddFilmModal.bind(this);
        this.closeAddFilmModal = this.closeAddFilmModal.bind(this);
    }

    showAddFilmModal() {
        this.setState({ displayAddFilmModal: true });
    }

    closeAddFilmModal() {
        this.setState({ displayAddFilmModal: false });
    }

    render() {
        return (
            <>
            <Button caption='+ ADD MOVIE' onClick={this.showAddFilmModal} />
            {this.state.displayAddFilmModal ? (<Modal
                closeModal={this.closeAddFilmModal}
                title='ADD MOVIE'
                innerComp={<AddMovieForm />}
            />) : null}
            </>
        )
    }
};

export default ModalContainer;