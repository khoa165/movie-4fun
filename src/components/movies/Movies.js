import React, { useContext } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import { Row } from 'reactstrap';
import MovieContext from '../../context/movie/movieContext';
import '../../styles/Movie.scss';

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { loading, movies } = movieContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div id='movies'>
        <Row>
          {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Row>
      </div>
    );
  }
};

export default Movies;
