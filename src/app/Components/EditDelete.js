import React from 'react';

import Button from './Button.js';

const EditDelete = () => {

    return (
        <ul>
            <li key='01'>
                <Button onClick={e=>e.preventDefault()} caption='EDIT' />
            </li>
            <li key='02'>
                <Button onClick={e=>e.preventDefault()} caption='DELETE' />
            </li>
        </ul>
    )
};

export default EditDelete;