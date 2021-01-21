import React from "react";
import PropTypes from "prop-types";

import TopBar from "./TopBar.js";
import Search from "./Search.js";
import FilmBody from "./FilmBody.js";

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
  film: PropTypes.array.isRequired,
  showFilmBody: PropTypes.bool.isRequired,
  toggleShowFilmBody: PropTypes.func.isRequired,
};

export default Header;
