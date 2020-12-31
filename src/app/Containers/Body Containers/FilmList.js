import React from 'react'
import Picture from '../../Images/Pulp Fiction.png';
import FilmCard from '../../Components/FilmCard.js';

const filmDatabase = [{
    name: 'Pulp Fiction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    genre: 'crime',
    descriptionShort: 'Action & Adventure',
    year: '2004',
    pictureURL: `../../Images/Pulp Fiction.png`
}]

const FilmList = () => {

    return (
        //filmDatabase.map((input) => {
            //console.log(input)
            <section className='filmList'>
                <img src={Picture} />
                <FilmCard name='Pulp Fiction' year='2004' description='Action and Adventure'/>
            </section>
        //})
    )
}

export default FilmList;