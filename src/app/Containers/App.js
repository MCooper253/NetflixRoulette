import React from "react";

import Body from './Body.js';
import Header from './Header.js';
import Footer from './Footer.js'
import ErrorBoundary from '../Error Components/ErrorBoundary.js'

//Importing saved images will not work dynamically when users start adding their own movies with movie urls.
//These can be concideraed stock or fallback images.
import PulpFictionImg from '../Images/Pulp Fiction.png'
import PointBreakImg from '../Images/Point Break.png'

//Also includes a ErrorBoundary as a fallback UI.
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFilmBody: false,
            films: [{
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
                title: 'Point Break',
                tagline: 'surf n dolla bills',
                vote_average: '8.2',
                vote_count: '3224',
                release_date: '2000-12-29',
                poster_path: PointBreakImg,
                overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                budget: '200000',
                revenue: '1000000',
                runtime: '156',
                genres: ['crime'],
                id: '02'
            }
        ]
        }

        this.toggleShowFilmBody = this.toggleShowFilmBody.bind(this);
    }
    
    toggleShowFilmBody() {
        console.log('this has run');
        this.setState({ showFilmBody: !this.state.showFilmBody })
    }

    render() {
        return (
            <ErrorBoundary>
                <Header showFilmBody={this.state.showFilmBody} />
                <Body toggleShowFilmBody={this.toggleShowFilmBody} films={this.state.films}/>
                <Footer />
            </ErrorBoundary>
        );
    }
};

export default App;