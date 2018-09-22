import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

const defaultProps = {
  tag: 'div',
  className: null,
  sm: null,
  md: null,
  lg: null,
};

const Col = ({ tag: Tag, className, sm, md, lg, ...attributes }) => {
  const classes = cx(
    'Col',
    sm && `Col--sm-${sm}`,
    md && `Col--md-${md}`,
    lg && `Col--lg-${lg}`,
    className
  );
  return <Tag className={classes} {...attributes} />;
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
