import React from 'react';

import Button from '../../Components/Button.js';

//Container for the ssearch input and search button.
const SeacrhBar = () => {

    return (
        <div className='form'>
            <input type="text" name="Search Criteria" placeholder="What do you want to watch?"/>
            <Button caption="Search" onClick={onSearch} />
        </div>
    )
};

//func hoisted above the class when script is compiled.
const onSearch = (e) => {e.preventDefault()}

export default SeacrhBar;