import React from 'react'

import PulpFictionImg from '../../Images/Pulp Fiction.png';
import PointBreakImg from '../../Images/Point Break.png';

import FilmInfo from '../../Components/FilmInfo.js';
import Button from '../../Components/Button.js';


//artifical database as no API calls are to be made at this ponit.
const filmDatabase = [{
    name: 'Pulp Fiction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    genre: 'crime',
    descriptionShort: 'Action & Adventure',
    year: '2004',
    pictureURL: PulpFictionImg,
    id: '01'
},
{
    name: 'Point Break',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    genre: 'crime',
    descriptionShort: 'Action, Crime & Extream Sports',
    year: '2000',
    pictureURL: PointBreakImg,
    id: '02'
},
{
    name: 'Point Break',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    genre: 'crime',
    descriptionShort: 'Action, Crime & Extream Sports',
    year: '2000',
    pictureURL: PointBreakImg,
    id: '03'
},
{
    name: 'Point Break',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    genre: 'crime',
    descriptionShort: 'Action, Crime & Extream Sports',
    year: '2000',
    pictureURL: PointBreakImg,
    id: '04'
},
{
    name: 'Point Break',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    genre: 'crime',
    descriptionShort: 'Action, Crime & Extream Sports',
    year: '2000',
    pictureURL: PointBreakImg,
    id: '05'
}]

const FilmList = () => {


    return (
        <section className='filmList'>
            {filmDatabase.map((input)=>{
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