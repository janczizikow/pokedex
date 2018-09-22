import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './CardBody.css';

const propTypes = {
  className: PropTypes.string,
  num: PropTypes.string,
  heading: PropTypes.string,
};

const defaultProps = {
  className: null,
  num: null,
  heading: null,
};

const CardBody = ({ className, num, heading, children, ...attributes }) => {
  const classes = cx('CardBody', className);
  return (
    <div className={classes} {...attributes}>
      {num && <span className="CardBody__num">{num}</span>}
      {heading && <h2 className="CardBody__heading">{heading}</h2>}
      {children}
    </div>
  );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
