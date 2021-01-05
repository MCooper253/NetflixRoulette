import React from "react";

import Body from './Body.js';
import Header from './Header.js';
import Footer from './Footer.js'
import ErrorBoundary from '../Error Components/ErrorBoundary.js'

//Does the leg work rendering all the containers into the .html
//Also includes a ErrorBoundary as a fallback UI.
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