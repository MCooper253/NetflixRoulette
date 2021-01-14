import React from "react";

import PointBreakImg from '../Images/Point Break.png'
import PulpFictionImg from '../Images/Pulp Fiction.png'

//Logo is as simple as you may imagine. A re-usable compononet.
const FilmBodyImage = (props) => {

    return (
        <img src={props.filmImage} />
    );
};

export default FilmBodyImage;