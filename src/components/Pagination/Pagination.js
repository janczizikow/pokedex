import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Pagination.css';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  tag: 'nav',
  className: null,
};

const Pagination = ({ tag: Tag, className, ...attributes }) => {
  const classes = cx('Pagination', className);
  return <Tag className={classes} {...attributes} />;
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
