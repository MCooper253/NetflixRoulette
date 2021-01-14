import React from 'react';
import PropTypes from 'prop-types';

import TopBar from './Header Containers/TopBar.js';
import Search from './Header Containers/Search.js';
import FilmBody from './Header Containers/FilmBody.js';

//High level header container.
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <TopBar showFilmBody={this.props.showFilmBody} toggleShowhowFilmBody={this.props.toggleShowFilmBody} />
                {this.props.showFilmBody ?
                <FilmBody film={this.props.film[0]} /> : (
                    <>
                    <Search />
                    </>
                )}
            </header>
        );
    }
};

Header.propTypes = {
    film: PropTypes.array.isRequired,
    showFilmBody: PropTypes.bool.isRequired,
    toggleShowFilmBody: PropTypes.func.isRequired
}

export default Header;