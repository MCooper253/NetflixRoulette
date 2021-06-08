import React from "react";
import ReactImageFallback from "react-image-fallback";

import placeholder from '../Images/film-poster-placeholder.png';

//Logo is as simple as you may imagine. A re-usable compononet.
const FilmBodyImage = (props) => {

    return (
        <ReactImageFallback src={ props.filmImage } fallbackImage={ placeholder } />
    );
};

export default FilmBodyImage;