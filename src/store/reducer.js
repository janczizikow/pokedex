import * as actionTypes from './actions/actionTypes';
import { updateStateObject } from './utils';

const initialState = {
  pokemons: null,
  error: null,
};

const setPokemons = (state, action) =>
  updateStateObject(state, {
    pokemons: action.payload,
    error: null,
  });

const fetchPokemonsFail = (state, action) =>
  updateStateObject(state, {
    error: action.payload,
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POKEMONS:
      return setPokemons(state, action);
    case actionTypes.FETCH_POKEMONS_FAIL:
      return fetchPokemonsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
