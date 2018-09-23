import * as actionTypes from './actions/actionTypes';
import { updateStateObject } from './utils';

const initialState = {
  pokemons: null,
  loading: true,
  error: null,
};

const setPokemons = (state, action) =>
  updateStateObject(state, {
    loading: false,
    pokemons: action.payload,
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POKEMONS:
      return setPokemons(state, action);
    default:
      return state;
  }
};

export default reducer;
