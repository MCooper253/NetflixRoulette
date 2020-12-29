import React from 'react';

import Button from '../Components/Button.js';

const SeacrhBar = () => {

    return (
        <form>
            <input type="text" name="Search Criteria" />
            <Button caption="Search" onClick={onSearch} />
        </form>
    )
};

const onSearch = (e) => {e.preventDefault()}

export default SeacrhBar;