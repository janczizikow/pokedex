import React from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import cx from 'classnames';
import './PaginationItem.css';

const proptTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  first: PropTypes.bool,
  previous: PropTypes.bool,
  next: PropTypes.bool,
  last: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
  className: null,
  previous: false,
  next: false,
};

const PaginationItem = ({
  tag: Tag,
  className,
  active,
  disabled,
  previous,
  next,
  children,
  ...attributes
}) => {
  const classes = cx(
    'PaginationItem',
    active && 'PaginationItem--active',
    disabled && 'PaginationItem--disabled',
    (previous || next) && 'PaginationItem--outline',
    className
  );
  let child = children;

  if (previous) {
    child = <MdChevronLeft />;
  }

  if (next) {
    child = <MdChevronRight />;
  }

  return (
    <Tag className={classes} {...attributes}>
      {child}
    </Tag>
  );
};

PaginationItem.proptTypes = proptTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
