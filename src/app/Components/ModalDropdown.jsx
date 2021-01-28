/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import Check from '../Images/tick.svg';

import I18N from '../../core/I18N';

const ModalDropdown = ({
  toggleGenreState,
  comedyState,
  crimeState,
  documentaryState,
  horrorState,
}) => (
  <div className="modal-dropdown">
    <ul>
      <li onClick={toggleGenreState} title="comedy">
        <img
          alt="comedy_check_box"
          title="comedy"
          src={Check}
          style={comedyState ? { backgroundColor: 'rgb(246, 82, 97)' } : null}
        />
        {I18N[process.env.LANG].COMEDY_LC}
      </li>
      <li onClick={toggleGenreState} title="crime">
        <img
          alt="crime_check_box"
          title="crime"
          src={Check}
          style={crimeState ? { backgroundColor: 'rgb(246, 82, 97)' } : null}
        />
        {I18N[process.env.LANG].COMEDY_LC}
      </li>
      <li onClick={toggleGenreState} title="horror">
        <img
          alt="horror_check_box"
          title="horror"
          src={Check}
          style={horrorState ? { backgroundColor: 'rgb(246, 82, 97)' } : null}
        />
        {I18N[process.env.LANG].HORROR_LC}
      </li>
      <li onClick={toggleGenreState} title="documentary">
        <img
          alt="documentary_check_box"
          title="documentary"
          src={Check}
          style={
            documentaryState ? { backgroundColor: 'rgb(246, 82, 97)' } : null
          }
        />
        {I18N[process.env.LANG].DOCUMENTERY_LC}
      </li>
    </ul>
  </div>
);

ModalDropdown.propTypes = {
  toggleGenreState: PropTypes.func.isRequired,
  comedyState: PropTypes.bool.isRequired,
  crimeState: PropTypes.bool.isRequired,
  horrorState: PropTypes.bool.isRequired,
  documentaryState: PropTypes.bool.isRequired,
};

export default ModalDropdown;
