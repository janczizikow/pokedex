import api from '../../axios';
import * as actionTypes from './actionTypes';

export const setPokemons = pokemons => ({
  type: actionTypes.SET_POKEMONS,
  payload: pokemons,
});

export const fetchPokemonsFail = error => ({
  type: actionTypes.FETCH_POKEMONS_FAIL,
  payload: error,
});

export const fetchPokemons = () => dispatch => {
  api
    .get()
    .then(res => {
      const data =
        process.env.NODE_ENV === 'production' ? res.data.pokemon : res.data;
      dispatch(setPokemons(data));
    })
    .catch(error => {
      dispatch(fetchPokemonsFail(error));
    });
};
