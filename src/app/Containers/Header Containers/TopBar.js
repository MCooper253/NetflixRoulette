import React from 'react';

import ModalContainer from '../Header Containers/ModalContainer.js'
import Logo from '../../Components/Logo.js';
import Button from '../../Components/Button.js';

//The Top 'nav' style bar at the top of the header.
const TopBar = () => {

    return (
        <nav>
        <ModalContainer />
        <Logo />
        </nav>
    )
};

const renderPopup = () => {
    
}

export default TopBar;