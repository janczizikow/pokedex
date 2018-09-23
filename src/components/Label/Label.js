import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Label.css';

const propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  color: null,
  className: null,
};

const Label = ({ color, className, ...attributes }) => {
  const classes = cx(
    'Label',
    color && `Label--${color.toLowerCase()}`,
    className
  );
  return <div className={classes} {...attributes} />;
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
