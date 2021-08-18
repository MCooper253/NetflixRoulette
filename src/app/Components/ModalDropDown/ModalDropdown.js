import React from 'react';

import Check from '../../Images/tick.svg'

const ModalDropdown = (props) => {

    return (
        <div className='modal-dropdown'>
            <ul>
                <li onClick={props.toggleGenreState} title='action'>
                    <img
                        alt={props.actionState ? 'action-checkbox-checked' : 'action-checkbox'}
                        src={Check}
                        className={props.actionState ? 'active' : null}
                    />
                    Action
                </li>
                <li onClick={props.toggleGenreState} title='crime'>
                    <img
                        alt='crime-checkbox'
                        src={Check}
                        className={props.crimeState ? 'active' : null}
                    />
                    Crime
                </li>
                <li onClick={props.toggleGenreState} title='horror'>
                    <img
                        alt='horror-checkbox'
                        src={Check}
                        className={props.horrorState ? 'active' : null}
                    />
                    Horror
                </li>
                <li onClick={props.toggleGenreState} title='documentary'>
                    <img
                        alt={props.documentaryState ? 'documentary-checkbox-active' : 'documentary-checkbox'}
                        src={Check}
                        className={props.documentaryState ? 'active' : null}
                    />
                    Documentary
                </li>
            </ul>
        </div>
    )
};

export default ModalDropdown;