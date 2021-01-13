import React from 'react';

import TopBar from './Header Containers/TopBar.js';
import Search from './Header Containers/Search.js';
import Logo from '../Components/Logo.js';

//High level header container.
class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                {this.props.showFilmBody ?
                <Logo /> : (
                    <>
                    <TopBar />
                    <Search />
                    </>
                )}
            </header>
        );
    }
};

export default Header;