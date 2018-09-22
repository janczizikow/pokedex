import React from 'react';
import PropTypes from 'prop-types';
import './CardImg.css';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const CardImg = ({ src, alt }) => (
  <div className="CardImg">
    <img src={src} alt={alt} />
  </div>
);

CardImg.propTypes = propTypes;

export default CardImg;
