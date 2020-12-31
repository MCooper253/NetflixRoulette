import React from "react";
import NavBar from '../Components/NavBar.js'
import FilmList from './Body Containers/FilmList.js'

const Body = () => {
    return(
        <main>
            <NavBar />
            <FilmList />
        </main>
    )
};

export default Body;