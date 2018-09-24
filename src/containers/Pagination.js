import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { Row } from '../components/Grid';
import PaginationUI from '../components/Pagination';
import PaginationItem from '../components/PaginationItem';

/* eslint-disable react/require-default-props */
const propTypes = {
  pagination: PropTypes.shape({
    first: PropTypes.number,
    last: PropTypes.number,
    prev: PropTypes.number,
    next: PropTypes.number,
    currentPage: PropTypes.number,
  }),
};

export const Pagination = ({ pagination }) => (
  <Row align="center" justify="center" style={{ margin: '40px 0' }}>
    {pagination && (
      <PaginationUI>
        {pagination.prev && (
          <PaginationItem
            tag={Link}
            to={`/?page=${pagination.prev}`}
            previous
          />
        )}
        {pagination.first !== pagination.currentPage ? (
          <Fragment>
            <PaginationItem tag={Link} to={`/?page=${pagination.first}`}>
              {pagination.first}
            </PaginationItem>
            {pagination.first + 1 !== pagination.currentPage && (
              <PaginationItem disabled>...</PaginationItem>
            )}
          </Fragment>
        ) : null}
        <PaginationItem tag={Link} to="/" active>
          {pagination.currentPage}
        </PaginationItem>
        {pagination.last !== pagination.currentPage ? (
          <Fragment>
            {pagination.last - 1 !== pagination.currentPage && (
              <PaginationItem disabled>...</PaginationItem>
            )}
            <PaginationItem tag={Link} to={`/?page=${pagination.last}`}>
              {pagination.last}
            </PaginationItem>
          </Fragment>
        ) : null}
        {pagination.next && (
          <PaginationItem tag={Link} to={`/?page=${pagination.next}`} next />
        )}
      </PaginationUI>
    )}
  </Row>
);

Pagination.propTypes = propTypes;

const mapStateToProps = state => ({
  currentPage: state.currentPage,
  pagination: state.pagination,
});

export default connect(mapStateToProps)(Pagination);
