import api from '../../axios';
import * as actionTypes from './actionTypes';

export const showSpinner = () => ({
  type: actionTypes.SHOW_SPINNER,
});

export const setPokemons = payload => ({
  type: actionTypes.SET_POKEMONS,
  payload,
});

export const fetchPokemonsFail = error => ({
  type: actionTypes.FETCH_POKEMONS_FAIL,
  error,
});

export const fetchPokemons = page => dispatch => {
  api
    .get(`?_page=${page}&_limit=12`)
    .then(response => {
      dispatch(setPokemons({ page, response }));
    })
    .catch(error => {
      dispatch(fetchPokemonsFail(error));
    });
};
