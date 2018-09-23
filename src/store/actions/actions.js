import api from '../../axios';
import * as actionTypes from './actionTypes';

export const setPokemons = pokemons => ({
  type: actionTypes.SET_POKEMONS,
  payload: pokemons,
});

export const fetchPokemons = () => dispatch => {
  api
    .get('/')
    .then(res => {
      dispatch(setPokemons(res.data));
    })
    .catch(error => {
      // TODO: ADD ERROR HANDLING
      console.log(error);
    });
};
