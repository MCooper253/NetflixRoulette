import React from 'react';

import TopBar from './Header Containers/TopBar.js';
import Search from './Header Containers/Search.js'

const Header = () => {

    return (
        <header>
        <TopBar />
        <Search />
        </header>
    );
};

export default Header;