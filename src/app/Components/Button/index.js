import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {

    //every button in this application gets a funciton to call on the onClick event.
    //class name and caption are optional props.

    return (
        <button onClick={props.onClick} className={props.className ? props.className : null}>
            {props.image ? <img src={props.image} /> : null}
            {props.caption ? props.caption : null}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    caption: PropTypes.string,
    className: PropTypes.string,
    image: PropTypes.string
};

export default Button;