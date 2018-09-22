import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Container.css';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
  className: null,
  fluid: false,
};

const Container = ({ tag: Tag, className, fluid, ...attributes }) => {
  const classes = cx(fluid ? 'Container--fluid' : 'Container', className);

  return <Tag className={classes} {...attributes} />;
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
