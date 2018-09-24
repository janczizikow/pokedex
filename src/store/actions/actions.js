import api from '../../axios';
import * as actionTypes from './actionTypes';

export const setPokemons = data => ({
  type: actionTypes.SET_POKEMONS,
  payload: data,
});

export const fetchPokemonsFail = error => ({
  type: actionTypes.FETCH_POKEMONS_FAIL,
  payload: error,
});

export const fetchPokemons = page => dispatch => {
  api
    .get(`?_page=${page}&_limit=12`)
    .then(response => {
      // process.env.NODE_ENV === 'production' ? response.data.pokemon : response.data;
      const { data, headers } = response;
      dispatch(setPokemons({ page, headers, data }));
    })
    .catch(error => {
      dispatch(fetchPokemonsFail(error));
    });
};
