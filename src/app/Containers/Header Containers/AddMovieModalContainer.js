import React from 'react';
import disableScroll from 'disable-scroll';

import Button from '../../Components/Button.js';
import Modal from '../../Components/Modal.js';
import AddMovieForm from '../../Components/AddMovieForm.js'
import CongratsMessage from '../../Components/CongratsMessage.js'

class ModalContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { displayAddFilmModal: false, displayConfirmModal: false }; // set false for productoin

        this.showAddFilmModal = this.showAddFilmModal.bind(this);
        this.closeAddFilmModal = this.closeAddFilmModal.bind(this);
        this.closeConfirmModal = this.closeConfirmModal.bind(this);
        this.showConfirmModal = this.showConfirmModal.bind(this);
        this.onAddMovieSubmit = this.onAddMovieSubmit.bind(this);
    }

    showAddFilmModal() {
        this.setState({ displayAddFilmModal: true });
    }

    closeAddFilmModal() {
        this.setState({ displayAddFilmModal: false });
    }

    showConfirmModal() {
        this.setState({ displayConfirmModal: true });
    }

    closeConfirmModal() {
        this.setState({ displayConfirmModal: false });
    }

    onAddMovieSubmit() {
        this.closeAddFilmModal();
        this.showConfirmModal();
    }

    render() {
        return (
            <>
            <Button caption='+ ADD MOVIE' onClick={this.showAddFilmModal} />
            {this.state.displayAddFilmModal ? (<Modal
                closeModal={this.closeAddFilmModal}
                title='ADD MOVIE'
                innerComp={<AddMovieForm
                    onSubmit={this.onAddMovieSubmit}
                />}
            />) : null}
            {this.state.displayConfirmModal ? (
                <Modal
                    closeModal={this.closeConfirmModal}
                    title='CONGRATULATIONS!'
                    innerComp={
                        <CongratsMessage />
                    }
                />) : null}
            </>
        )
    }
};

export default ModalContainer;