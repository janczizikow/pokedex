import reducer from '../store/reducer';
import * as actionTypes from '../store/actions/actionTypes';

describe('reducer', () => {
  const initialState = {
    pokemons: null,
    error: null,
    totalCount: null,
    pagination: null,
    loading: true,
  };

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ...initialState,
    });
  });

  it('shows spinner', () => {
    expect(reducer(initialState, { type: actionTypes.SHOW_SPINNER })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('sets the pokemons', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_POKEMONS,
        payload: {
          response: {
            headers: {
              'x-total-count': '1',
              link:
                '<http://localhost:3001/pokemon?_page=1&_limit=12>; rel="first"',
            },
            data: [{ id: 0, name: 'Pikachu' }],
          },
          error: null,
          page: 1,
          loading: false,
        },
      })
    ).toEqual({
      pokemons: [{ id: 0, name: 'Pikachu' }],
      totalCount: 1,
      error: null,
      loading: false,
      pagination: {
        currentPage: 1,
        first: 1,
      },
    });
  });

  it('handles errors', () => {
    const error = new Error('Request failed with status code 404');
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_POKEMONS_FAIL,
        error,
        loading: false,
      })
    ).toEqual({
      ...initialState,
      error,
      loading: false,
    });
  });
});
