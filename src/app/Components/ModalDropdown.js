import React from 'react';
import PropTypes from 'prop-types';

import Check from '../Images/tick.svg';

const ModalDropdown = (props) => {

    return (
        <div className='modal-dropdown'>
            <ul>
                <li onClick={props.toggleGenreState} title='action'>
                    <img
                        title='action'
                        src={Check}
                        style={props.actionState ? {backgroundColor: 'rgb(246, 82, 97)'} : null}
                    />
                    Action
                </li>
                <li onClick={props.toggleGenreState} title='crime'>
                    <img
                        title='crime'
                        src={Check}
                        style={props.crimeState ? {backgroundColor: 'rgb(246, 82, 97)'} : null}
                    />
                    Crime
                </li>
                <li onClick={props.toggleGenreState} title='horror'>
                    <img
                        title='horror'
                        src={Check}
                        style={props.horrorState ? {backgroundColor: 'rgb(246, 82, 97)'} : null}
                    />
                    Horror
                </li>
                <li onClick={props.toggleGenreState} title='documentary'>
                    <img
                        title='documentary'
                        src={Check}
                        style={props.documentaryState ? {backgroundColor: 'rgb(246, 82, 97)'} : null}
                    />
                    Documentary
                </li>
            </ul>
        </div>
    );
};

export default ModalDropdown;