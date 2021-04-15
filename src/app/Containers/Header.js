import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopBar from './Header Containers/TopBar.js';
import Search from './Header Containers/Search.js';
import FilmBody from './Header Containers/FilmBody.js';

const mapStateToProps = state => {
    return {
        film: state.filmBody.filmBodyToRender
    }
}

//High level header container.
const Header = (props) => {

    return (
        <header>
            <TopBar film={props.film} />
            {props.film ? <FilmBody film={props.film}/> : <Search /> }
        </header>
    );
};

Header.propTypes = {
    film: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Header);