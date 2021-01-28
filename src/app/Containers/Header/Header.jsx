import React from 'react';
import PropTypes from 'prop-types';

import TopBar from './TopBar.jsx';
import Search from './Search.jsx';
import FilmBody from './FilmBody.jsx';

import { films } from '../../../core/data/Films.json';

//High level header container.
const Header = (props) => {

    return (
        <header>
            <TopBar showFilmBody={props.showFilmBody} toggleShowhowFilmBody={props.toggleShowFilmBody} />
            {props.showFilmBody ?
            <FilmBody film={props.film[0]} /> : (
                <>
                <Search />
                </>
            )}
        </header>
    );
};

Header.propTypes = {
  filmBodyToRender: PropTypes.any,
  showFilmBody: PropTypes.bool.isRequired,
  toggleShowFilmBody: PropTypes.func.isRequired,
};

export default Header;
