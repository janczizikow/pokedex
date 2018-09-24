import * as actionTypes from './actions/actionTypes';
import { parseLinks, updateStateObject } from './utils';

const initialState = {
  pokemons: null,
  error: null,
  totalCount: null,
  pagination: null,
  loading: true,
};

const showSpinner = state =>
  updateStateObject(state, {
    loading: true,
  });

const setPokemons = (state, action) => {
  const pokemons = action.payload.response.data;
  const pagination = parseLinks(action.payload.response.headers.link);
  const totalCount = parseInt(
    action.payload.response.headers['x-total-count'],
    10
  );

  return updateStateObject(state, {
    pokemons,
    totalCount,
    error: null,
    loading: false,
    pagination: {
      currentPage: action.payload.page,
      ...pagination,
    },
  });
};

const fetchPokemonsFail = (state, action) =>
  updateStateObject(state, {
    error: action.error,
    loading: false,
  });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SPINNER:
      return showSpinner(state);
    case actionTypes.SET_POKEMONS:
      return setPokemons(state, action);
    case actionTypes.FETCH_POKEMONS_FAIL:
      return fetchPokemonsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
