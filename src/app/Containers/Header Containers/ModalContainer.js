import React from 'react';
import disableScroll from 'disable-scroll';

import Button from '../../Components/Button.js';
import Modal from '../../Components/Modal.js';
import AddMovieForm from '../../Components/AddMovieForm.js'

class ModalContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isShown: false };

        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showModal() {
        this.setState({ isShown: true });
    }

    closeModal() {
        this.setState({ isShown: false });
    }

    render() {
        return (
            <>
            <Button caption='+ ADD MOVIE' onClick={this.showModal} />
            {this.state.isShown ? (<Modal
                closeModal={this.closeModal}
                title='ADD MOVIE'
                innerComp={<AddMovieForm />}
            />) : null}
            </>
        )
    }
};

export default ModalContainer;