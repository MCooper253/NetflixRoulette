import React from 'react';

import FilmInfo from '../../Components/FilmInfo.js';
import Button from '../../Components/Button.js';
import FilmImage from '../FilmImage.js'

const FilmCard = (props) => {

    return (
        <>
            <div className='image-container'>
                <Button 
                    onClick={(e) => {e.preventDefault()}}
                    caption=''
                    className='edit-button'
                />
                <FilmImage 
                    img={props.pictureURL}
                />
            </div>
            <FilmInfo
                description={props.descriptionShort}
                name={props.name}
                year={props.year}
            />
        </>
    )
};

export default FilmCard;