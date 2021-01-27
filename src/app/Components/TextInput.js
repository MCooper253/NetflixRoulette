import React from 'react';
import propTypes from 'prop-types';

const TextInput = (props) => (
  <input type={props.type} name={props.name} placeholder={props.placeHolder} />
);

TextInput.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeHolder: propTypes.string.isRequired,
};

export default TextInput;
