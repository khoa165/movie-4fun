import { SEARCH_MOVIES, CLEAR_MOVIES, SET_LOADING, GET_MOVIE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
