import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
  wrap: PropTypes.oneOf([null, 'no-wrap', 'wrap-reverse']),
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
};

const defaultProps = {
  tag: 'div',
  className: null,
  inline: false,
  wrap: null,
  column: false,
  reverse: false,
  align: null,
  justify: null,
};

const Row = ({
  tag: Tag,
  className,
  inline,
  wrap,
  column,
  reverse,
  align,
  justify,
  ...attributes
}) => {
  const classes = cx(
    'Row',
    inline && 'Row--inline',
    wrap && `Row--${wrap}`,
    column && 'Row--column',
    align && `Row--align-${align}`,
    justify && `Row--justify-${justify}`,
    reverse && column ? 'Row--column-reverse' : 'Row--row-reverse',
    className
  );
  return <Tag className={classes} {...attributes} />;
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
