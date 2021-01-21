import React from "react";
import PropTypes from "prop-types";

import TopBar from "./Header Containers/TopBar.js";
import Search from "./Header Containers/Search.js";
import FilmBody from "./Header Containers/FilmBody.js";

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
