import * as actionTypes from './actions/actionTypes';
import { parseLinks, updateStateObject } from './utils';

const initialState = {
  pokemons: null,
  error: null,
  totalCount: null,
  pagination: null,
};

const setPokemons = (state, action) => {
  const pokemons = action.payload.data;
  const pagination = parseLinks(action.payload.headers.link);
  const totalCount = parseInt(action.payload.headers['x-total-count'], 10);

  return updateStateObject(state, {
    pokemons,
    totalCount,
    error: null,
    pagination: {
      currentPage: action.payload.page,
      ...pagination,
    },
  });
};

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
