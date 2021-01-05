import React from 'react';
import Logo from '../../Components/Logo.js';
import Button from '../../Components/Button.js';

//The Top 'nav' style bar at the top of the header.
const TopBar = () => {

    return (
        <nav>
        <Button caption='+ ADD MOVIE' onClick={e=>e.preventDefault()} />
        <Logo />
        </nav>
    )
};

export default TopBar;