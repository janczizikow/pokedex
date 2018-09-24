import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { Container, Row, Col } from '../components/Grid';
import PaginationWithConnect from './Pagination/Pagination';
import Modal from '../components/Modal';
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
  showSpinner: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.shape({ message: PropTypes.string.isRequired }),
  totalCount: PropTypes.number,
  location: PropTypes.shape({ search: PropTypes.string }),
};

export class Main extends Component {
  state = {
    activePokemon: null,
    isModalOpen: false,
  };

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
    const { showSpinner, fetchPokemons, location } = this.props;
    showSpinner();

    const query = new URLSearchParams(location.search);
    const pageNumber = parseInt(query.get('page'), 10);

    fetchPokemons(pageNumber || 1);
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.handleCloseModal();
    }
  };

  handleOpenModal = pokemonId => {
    const { pokemons } = this.props;
    const index = pokemons.findIndex(pokemon => pokemon.id === pokemonId);
    const activePokemon = pokemons[index];

    this.setState({
      isModalOpen: true,
      activePokemon,
    });
    document.addEventListener('keydown', this.handleKeyDown);
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  render() {
    const { loading, pokemons, error, totalCount } = this.props;
    const { isModalOpen, activePokemon } = this.state;
    let pokemonsList;

    if (error) {
      pokemonsList = <p style={{ margin: '0 auto' }}>{error.message}</p>;
    }

    let count = null;

    if (!loading && pokemons && totalCount) {
      /* eslint-disable react/jsx-one-expression-per-line */
      count = <h2>{totalCount} Pokemons</h2>;
      /* eslint-enable react/jsx-one-expression-per-line */
    }

    if (pokemons) {
      pokemonsList = pokemons.map(pokemon => (
        <Col key={pokemon.id} sm={6} md={4} lg={3}>
          <Card onClick={() => this.handleOpenModal(pokemon.id)}>
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

    if (loading) {
      pokemonsList = <Spinner />;
    }

    return (
      <Container>
        {count}
        <Row>{pokemonsList}</Row>
        <PaginationWithConnect />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.handleCloseModal}
          pokemon={activePokemon}
        />
      </Container>
    );
  }
}

Main.propTypes = propTypes;

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  error: state.error,
  totalCount: state.totalCount,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: page => dispatch(actions.fetchPokemons(page)),
  showSpinner: () => dispatch(actions.showSpinner()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
