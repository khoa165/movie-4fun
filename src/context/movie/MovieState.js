import React, { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import { SEARCH_MOVIES, GET_MOVIE, CLEAR_MOVIES, SET_LOADING } from '../types';

let tmdbApiKey;

if (process.env.NODE_ENV !== 'production') {
  tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY;
} else {
  tmdbApiKey = process.env.TMDB_API_KEY;
}

const MovieState = props => {
  const initialState = {
    searchInfo: {},
    movies: [],
    movie: {},
    loading: false
  };
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Search movies.
  const searchMovies = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${text}`
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results
    });
  };

  // Get info about a specific movie.
  const getMovie = async id => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}`
    );
    dispatch({
      type: GET_MOVIE,
      payload: res.data
    });
  };

  // Clear movies from results.
  const clearMovies = async text => dispatch({ type: CLEAR_MOVIES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <MovieContext.Provider
      value={{
        searchInfo: state.searchInfo,
        movies: state.movies,
        movie: state.movie,
        repos: state.repos,
        loading: state.loading,
        searchMovies,
        getMovie,
        clearMovies,
        setLoading
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
