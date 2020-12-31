import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {

    //every button in this application gets a caption a funciton to call on the onClick event.
    return <button onClick={props.onClick}>{props.caption}</button>;
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    caption: PropTypes.string.isRequired
};

export default Button;