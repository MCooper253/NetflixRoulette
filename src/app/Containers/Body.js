import React from "react";

import PulpFictionImg from '../Images/Pulp Fiction.png'
import PointBreakImg from '../Images/Point Break.png'

import NavBar from '../Components/NavBar.js'
import FilmList from './Body Containers/FilmList.js'
import MovieCounter from '../Components/MoiveCounter.js'

class Body extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            films: [{
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
        }
    }

    render() {
        return (
            <main>
                <NavBar />
                <MovieCounter count={this.state.films.length} />
                <FilmList films={this.state.films} />
            </main>
        )
    }
}

export default Body;