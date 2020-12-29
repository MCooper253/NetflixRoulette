import React from 'react';

import Button from '../Components/Button.js';
import Logo from '../Components/logo.js'
import SearchBar from './SearchBar.js'

const Header = () => {

    return (
        <>
        <Logo />
        <Button caption='+ Movie' onClick={e=>e.preventDefault()} />
        <h1>FIND YOUR MOVIE</h1>
        <SearchBar />
        </>
    );
};

export default Header;