import React from "react";

const PointBreakImg = React.lazy(() => import('../Images/Point Break.png'))
const PulpFictionImg = React.lazy(() => import('../Images/Pulp Fiction.png'))

//Logo is as simple as you may imagine. A re-usable compononet.
const FilmBodyImage = ({ filmImage }) => {

    return (
        <img src={filmImage} />
    );
};

export default FilmBodyImage;