import React, { useState } from "react";

import Body from './Body.js';
import Header from './Header.js';
import Footer from './Footer.js'
import ErrorBoundary from '../Error Components/ErrorBoundary.js'
import HeaderBackgroundImage from '../Images/header-background.jpg'

//Importing saved images will not work dynamically when users start adding their own movies with movie urls.
//These can be concideraed stock or fallback images.
import PulpFictionImg from '../Images/Pulp Fiction.png'
import PointBreakImg from '../Images/Point Break.png'
import IcarusImg from '../Images/Icarus.png'

//Also includes a ErrorBoundary as a fallback UI.
const App = () => {

    const [films, setFilms] = useState([{
        title: 'Pulp Fiction',
        tagline: 'foot massage',
        vote_average: '8.9',
        vote_count: '3294',
        release_date: '2004-12-29',
        poster_path: PulpFictionImg,
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        budget: '300000',
        revenue: '10000000',
        runtime: '123',
        genres: ['crime'],
        id: '01'
    },
    {
        title: 'Icarus',
        tagline: 'drugs and the grand tour',
        vote_average: '7.2',
        vote_count: '1287',
        release_date: '2017-06-14',
        poster_path: IcarusImg,
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        budget: '150000',
        revenue: '1100000',
        runtime: '113',
        genres: ['documentary'],
        id: '02'
    },
    {
        title: 'Point Break',
        tagline: 'surf n dolla bills',
        vote_average: '8.2',
        vote_count: '2962',
        release_date: '2000-12-29',
        poster_path: PointBreakImg,
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        budget: '200000',
        revenue: '1000000',
        runtime: '156',
        genres: ['crime'],
        id: '03'
    }])

    const [showFilmBody, setShowFilmBody] = useState(false);
    const [filmBodyToRender, setFilmBodyToRender] = useState(null);
    
    const toggleShowFilmBody = (e) => {

        if (e.target.classList[0] === 'filcard-image'){
            setShowFilmBody(true);
            setFilmBodyToRender(e.target.title)
            document.querySelector('header').style.background = `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85) ), url("${HeaderBackgroundImage}")`
        }
        else {
            setShowFilmBody(false);
            setFilmBodyToRender(null);
            document.querySelector('header').removeAttribute('style');
        }
    }

    return (
        <ErrorBoundary>
            <Header
                // showFilmBody={showFilmBody}
                // film={films.filter(film=>film.title == filmBodyToRender)}
                // toggleShowFilmBody={toggleShowFilmBody}
            />
            <Body
                toggleShowFilmBody={toggleShowFilmBody}
                films={films}
            />
            <Footer />
        </ErrorBoundary>
    );
};

export default App;