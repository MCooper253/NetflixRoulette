import React from 'react';
import PropTypes from 'prop-types';

import Check from '../Images/tick.svg';

import I18N from '../../core/I18N.js';

const ModalDropdown = (props) => {
  return (
    <div className="modal-dropdown">
      <ul>
        <li onClick={props.toggleGenreState} title="comedy">
          <img
            title="comedy"
            src={Check}
            style={
              props.comedyState ? { backgroundColor: 'rgb(246, 82, 97)' } : null
            }
          />
          {I18N[process.env.LANG].COMEDY_LC}
        </li>
        <li onClick={props.toggleGenreState} title="crime">
          <img
            title="crime"
            src={Check}
            style={
              props.crimeState ? { backgroundColor: 'rgb(246, 82, 97)' } : null
            }
          />
          {I18N[process.env.LANG].COMEDY_LC}
        </li>
        <li onClick={props.toggleGenreState} title="horror">
          <img
            title="horror"
            src={Check}
            style={
              props.horrorState ? { backgroundColor: 'rgb(246, 82, 97)' } : null
            }
          />
          {I18N[process.env.LANG].HORROR_LC}
        </li>
        <li onClick={props.toggleGenreState} title="documentary">
          <img
            title="documentary"
            src={Check}
            style={
              props.documentaryState
                ? { backgroundColor: 'rgb(246, 82, 97)' }
                : null
            }
          />
          {I18N[process.env.LANG].DOCUMENTERY_LC}
        </li>
      </ul>
    </div>
  );
};

ModalDropdown.propTypes = {
  toggleGenreState: PropTypes.func.isRequired,
  comedyState: PropTypes.bool.isRequired,
  crimeState: PropTypes.bool.isRequired,
  horrorState: PropTypes.bool.isRequired,
  documentaryState: PropTypes.bool.isRequired,
};

export default ModalDropdown;
