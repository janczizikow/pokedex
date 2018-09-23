import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Header from './components/Header';
import { Container, Row, Col } from './components/Grid';
import Spinner from './components/Spinner';
import Card from './components/Card';
import CardImg from './components/CardImg';
import CardBody from './components/CardBody';
import Label from './components/Label';
import './styles/App.css';

/* eslint-disable react/require-default-props */
const propTypes = {
  loading: PropTypes.bool,
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
};

export class App extends Component {
  componentDidMount = () => {
    const { fetchPokemons } = this.props;
    fetchPokemons();
  };

  render() {
    // TODO: Add error handling
    const { loading, pokemons } = this.props;
    let pokemonsList = null;

    if (loading) {
      pokemonsList = <Spinner />;
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
      <div className="App">
        <Header />
        <main className="App__content">
          <Container>
            <Row>{pokemonsList}</Row>
          </Container>
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(actions.fetchPokemons()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
