import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, image, caption, onClick, alt }) => (
  <button type="button" onClick={onClick} className={className || null}>
    {image ? <img src={image} alt={alt} /> : null}
    {caption || null}
  </button>
);

Button.defaultProps = {
  caption: null,
  className: null,
  image: null,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  caption: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Button;
