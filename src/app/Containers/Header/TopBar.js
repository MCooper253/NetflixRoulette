import React from 'react';
import PropTypes from 'prop-types';

import ModalContainer from './AddMovieModalContainer.js';

import Logo from '../../Components/Logo.js';
import Search from '../../Images/search.png';

//The Top 'nav' style bar at the top of the header.
const TopBar = (props) => {
  return (
    <nav>
      {props.showFilmBody ? (
        <img src={Search} onClick={props.toggleShowhowFilmBody} />
      ) : (
        <ModalContainer />
      )}
      <Logo />
    </nav>
  );
};

TopBar.propTypes = {
  showFilmBody: PropTypes.bool.isRequired,
  toggleShowhowFilmBody: PropTypes.func.isRequired,
};

export default TopBar;
