import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { Container, Row, Col } from '../components/Grid';
import PaginationWithConnect from './Pagination';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import CardImg from '../components/CardImg';
import CardBody from '../components/CardBody';
import Label from '../components/Label';
import '../styles/App.css';

/* eslint-disable react/require-default-props */
const propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      num: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      type: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  fetchPokemons: PropTypes.func,
  error: PropTypes.shape({ message: PropTypes.string.isRequired }),
  totalCount: PropTypes.number,
  location: PropTypes.shape({ search: PropTypes.string }),
};

export class Main extends Component {
  componentDidMount = () => {
    this.fetchPageData();
  };

  componentDidUpdate = prevProps => {
    const { location } = this.props;
    if (prevProps.location.search !== location.search) {
      window.scrollTo(0, 0);
      this.fetchPageData();
    }
  };

  fetchPageData = () => {
    const { fetchPokemons, location } = this.props;
    const query = new URLSearchParams(location.search);
    const pageNumber = parseInt(query.get('page'), 10);
    fetchPokemons(pageNumber || 1);
  };

  render() {
    const { pokemons, error, totalCount } = this.props;
    let pokemonsList = error ? (
      <p style={{ margin: '0 auto' }}>{error.message}</p>
    ) : (
      <Spinner />
    );
    let count = null;

    if (pokemons && totalCount) {
      /* eslint-disable react/jsx-one-expression-per-line */
      count = <h2>{totalCount} Pokemons</h2>;
      /* eslint-enable react/jsx-one-expression-per-line */
    }

    if (pokemons) {
      pokemonsList = pokemons.map(pokemon => (
        <Col key={pokemon.id} sm={6} md={4} lg={3}>
          <Card>
            <CardImg src={pokemon.img} alt={pokemon.name} />
            <CardBody num={`#${pokemon.num}`} heading={pokemon.name}>
              {pokemon.type.map(type => (
                <Label key={`${pokemon.id}-${type}`} color={type}>
                  {type}
                </Label>
              ))}
            </CardBody>
          </Card>
        </Col>
      ));
    }
    return (
      <Container>
        {count}
        <Row>{pokemonsList}</Row>
        <PaginationWithConnect />
      </Container>
    );
  }
}

Main.propTypes = propTypes;

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  error: state.error,
  totalCount: state.totalCount,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: page => dispatch(actions.fetchPokemons(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
