import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Card.css';

const propTypes = {
  tag: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const Card = ({ tag: Tag, className, ...attributes }) => {
  const classes = cx('Card', className);
  return <Tag className={classes} {...attributes} />;
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
