import React from 'react'

import FilmInfo from '../../Components/FilmInfo.js';
import Button from '../../Components/Button.js';


//This is a conatiner that maps over film list (accepted as props) and returns all the film cards.
//In the future the 'film card image' could do with being exported as a different component to tidy this up. 
const FilmList = (props) => {

    return (
        <section className='filmList'>
            {props.films.map((input)=>{
                return (
                    //returns the film cards with film info and image.
                    <article key={input.id} className='filmCard' id={input.id}>
                        <div className='image-container'>
                            <Button 
                                onClick={(e) => {e.preventDefault()}}
                                caption=''
                                className='edit-button'
                            />
                            <img src={input.pictureURL} />
                        </div>
                        <FilmInfo
                            description={input.descriptionShort}
                            name={input.name}
                            year={input.year}
                        />
                    </article>
                )
            })}
        </section>
    )
}

export default FilmList;