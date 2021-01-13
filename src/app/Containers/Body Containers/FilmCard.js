import React from 'react';

import FilmInfo from '../../Components/FilmInfo.js';
import Button from '../../Components/Button.js';
import FilmImage from '../../Components/FilmImage.js';
import EditDelete from '../../Components/EditDelete.js';
import Modal from '../../Components/Modal.js';
import EditMovieForm from '../../Components/EditMovieForm.js';

class FilmCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editButtonShown: false,
            editMenueShown: false,
            modalShown: false,
            deleteModalShown: false,
        }

        this.toggleEditButton = this.toggleEditButton.bind(this);
        this.toggleEditMenue = this.toggleEditMenue.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    }

    toggleEditButton() {
        if (this.state.modalShown || this.state.deleteModalShown) {return null};
        this.setState({ editButtonShown: !this.state.editButtonShown });
    }

    toggleEditMenue() {
        if (this.state.modalShown || this.state.deleteModalShown) {return null};
        this.setState({ editMenueShown: !this.state.editMenueShown });
    }

    toggleModal() {
        this.setState({ modalShown: !this.state.modalShown });
    }
    
    toggleDeleteModal() {
        this.setState({ deleteModalShown: !this.state.deleteModalShown });
    }

    render() {
        return (
            <>
                <div className='image-container' onMouseEnter={this.toggleEditButton} onMouseLeave={()=>{this.toggleEditButton(); this.state.editMenueShown && this.toggleEditMenue();}}>

                    { this.state.editButtonShown ?
                        <Button 
                            onClick={this.toggleEditMenue}
                            caption=''
                            className='edit-button'
                            buttonId={`bt${this.props.id}`}
                        /> : null
                    }

                    { this.state.editMenueShown ? <EditDelete
                        toggleEditMenue={this.toggleEditMenue}
                        toggleModal={this.toggleModal}
                        toggleEditButton={this.toggleEditButton}
                        toggleDeleteModal={this.toggleDeleteModal} 
                    /> : null}

                    <FilmImage
                        img={this.props.pictureURL}
                    />

                </div>

                <FilmInfo
                    description={this.props.descriptionShort}
                    name={this.props.name}
                    year={this.props.year}
                />

                {this.state.modalShown && <Modal 
                    title='EDIT MOVIE' closeModal={this.toggleModal}
                    innerComp={<EditMovieForm
                        onSubmit={e=>e.preventDefault()}
                        filmName={this.props.name}
                        filmId={this.props.id}
                        filmYear={this.props.year}
                    />}
                />}
                {this.state.deleteModalShown && <Modal title='DELETE MOVIE' closeModal={this.toggleDeleteModal}/>}
            </>
        )
    }
};

export default FilmCard;