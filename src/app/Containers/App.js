import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Body from './Body.js';
import Header from './Header.js';
import Footer from './Footer.js'
import ErrorBoundary from '../Error Components/ErrorBoundary.js'
import HeaderBackgroundImage from '../Images/header-background.jpg'
import error404 from '../Components/404';


//Also includes a ErrorBoundary as a fallback UI.
const App = () => {

    const [showFilmBody, setShowFilmBody] = useState(false);
    const [filmBodyToRender, setFilmBodyToRender] = useState(null);
    
    const toggleShowFilmBody = (e) => {

        if (e.target.classList[0] === 'filcard-image'){
            setShowFilmBody(true);
            setFilmBodyToRender(e.target.title)
            document.querySelector('header').style.background = `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85) ), url("${HeaderBackgroundImage}")`
        }
        else {
            setShowFilmBody(false);
            setFilmBodyToRender(null);
            document.querySelector('header').removeAttribute('style');
        }
    }

    return (
        <ErrorBoundary>
            <Switch>
                <Route path='/'>
                    <Header />
                    <Body toggleShowFilmBody={toggleShowFilmBody} />
                    <Footer />
                </Route>
                <Route path='' component={error404} />
            </Switch>
            
        </ErrorBoundary>
    );
};

export default App;