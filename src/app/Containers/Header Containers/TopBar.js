import React from 'react';
import Logo from '../../Components/Logo.js';
import Button from '../../Components/Button.js';


const TopBar = () => {

    return (
        <nav>
        <Button caption='+ ADD MOVIE' onClick={e=>e.preventDefault()} />
        <Logo />
        </nav>
    )
};

export default TopBar;