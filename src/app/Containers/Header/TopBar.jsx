/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import ModalContainer from './AddMovieModalContainer.jsx';

import Logo from '../../Components/Logo.jsx';
import Search from '../../Images/search.png';

// The Top 'nav' style bar at the top of the header.
const TopBar = ({ showFilmBody, toggleShowhowFilmBody }) => (
  <nav>
    {showFilmBody ? (
      <img alt="search_icon" src={Search} onClick={toggleShowhowFilmBody} />
    ) : (
      <ModalContainer />
    )}
    <Logo />
  </nav>
);

TopBar.propTypes = {
  showFilmBody: PropTypes.bool.isRequired,
  toggleShowhowFilmBody: PropTypes.func.isRequired,
};

export default TopBar;
