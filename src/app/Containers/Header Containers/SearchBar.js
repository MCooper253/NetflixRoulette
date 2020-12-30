import React from 'react';

import Button from '../../Components/Button.js';

const SeacrhBar = () => {

    return (
        <div className='form'>
            <input type="text" name="Search Criteria" />
            <Button caption="Search" onClick={onSearch} />
        </div>
    )
};

const onSearch = (e) => {e.preventDefault()}

export default SeacrhBar;