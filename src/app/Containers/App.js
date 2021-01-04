import React from "react";

import Body from './Body.js';
import Header from './Header.js';
import Footer from './Footer.js'
import ErrorBoundary from '../Error Components/ErrorBoundary.js'

const App = () => {

    return (
        <ErrorBoundary>
            <Header />
            <Body />
            <Footer />
        </ErrorBoundary>
    );
};

export default App;