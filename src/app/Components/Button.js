import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {

    return <button onClick={props.onClick}>{props.caption}</button>;
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    caption: PropTypes.string.isRequired
};

export default Button;