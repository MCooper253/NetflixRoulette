import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {

    //every button in this application gets a caption and funciton to call on the onClick event.
    //class name is an optional prop

    if (!props.className){
        return (
            <button onClick={props.onClick}>
                {props.caption}
            </button>
        )
    } else {
        return(
            <button onClick={props.onClick} className={props.className}>
                {props.caption}
            </button>
        )
    }
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    caption: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Button;