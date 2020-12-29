import React from 'react';
import Logo from '../../Components/Logo.js';
import Button from '../../Components/Button.js';


const TopBar = () => {

    return (
        <div>
        <Logo />
        <Button caption='+ Movie' onClick={e=>e.preventDefault()} />
        </div>
    )
};

export default TopBar;