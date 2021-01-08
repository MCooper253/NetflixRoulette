import React from 'react';

import FilmInfo from '../../Components/FilmInfo.js';
import Button from '../../Components/Button.js';
import FilmImage from '../../Components/FilmImage.js';
import EditDelete from '../../Components/EditDelete.js';

class FilmCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editButtonShown: false,
            editMenueShown: false
        }

        this.toggleEditButton = this.toggleEditButton.bind(this);
        this.toggleEditMenue = this.toggleEditMenue.bind(this);
    }

    toggleEditButton() {
        this.setState({ editButtonShown: !this.state.editButtonShown });
    }

    toggleEditMenue() {
        this.setState({ editMenueShown: !this.state.editMenueShown });
    }

    render() {
        return (
            <>
                <div className='image-container' onMouseEnter={this.toggleEditButton} onMouseLeave={this.toggleEditButton}>

                    { this.state.editButtonShown ?
                        <Button 
                            onClick={this.toggleEditMenue}
                            caption=''
                            className='edit-button'
                            buttonId={`bt${this.props.id}`}
                        /> : null
                    }

                    { this.state.editMenueShown ? <EditDelete /> : null}

                    <FilmImage
                        img={this.props.pictureURL}
                    />

                </div>
                
                <FilmInfo
                    description={this.props.descriptionShort}
                    name={this.props.name}
                    year={this.props.year}
                />
            </>
        )
    }
};

export default FilmCard;