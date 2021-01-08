import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button.js';
import CloseImg from '../Images/close.png';

const EditDelete = (props) => {

    return (
        <div className='edit-menue'>
            <Button image={CloseImg} onClick={props.toggleEditMenue}/>
            <ul>
                <li key='01'>
                    <Button onClick={e=>e.preventDefault()} caption='EDIT' />
                </li>
                <li key='02'>
                    <Button onClick={e=>e.preventDefault()} caption='DELETE' />
                </li>
            </ul>
        </div>
    )
};

EditDelete.propTypes = {
    toggleEditMenue: PropTypes.func.isRequired
} 

export default EditDelete;