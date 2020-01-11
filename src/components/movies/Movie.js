import React, { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import MovieContext from '../../context/movie/movieContext';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import '../../styles/Movie.scss';

const Movie = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { loading, movie, getMovie } = movieContext;

  useEffect(() => {
    // match.params is used to retrieve params from url. In this case, retrieve id to pass as param for getMovie.
    getMovie(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    backdrop_path,
    poster_path,
    genres,
    production_companies,
    production_countries,
    budget,
    revenue,
    homepage,
    title,
    overview,
    popularity,
    tagline,
    vote_average,
    vote_count,
    release_date
  } = movie;

  if (loading) return <Spinner />;
  return (
    <div id='movie'>
      <Link to='/' className='btn btn-info'>
        <i className='fas fa-long-arrow-alt-left mr-2'></i>
        Return to search
      </Link>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt='Movie backdrop'
        className='img-fluid mt-5'
      />
      <Row className='mt-5'>
        <Col md='4' className='d-none d-md-block'>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt='Movie poster'
            className='img-fluid'
          />
        </Col>
        <Col md='8'>
          <Card>
            <CardHeader className='d-flex justify-content-between bg-danger text-white'>
              <CardTitle className='font-weight-bold m-0'>{title}</CardTitle>
              {homepage && (
                <a
                  href={homepage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='home-page-link'
                >
                  Visit <i className='fas fa-sign-out-alt ml-1'></i>
                </a>
              )}
            </CardHeader>
            <CardBody>
              <CardText>
                {overview ? (
                  overview
                ) : (
                  <strong>
                    Overview: <i className='fas fa-question text-danger' />
                  </strong>
                )}
              </CardText>
            </CardBody>
          </Card>
          <Card className='mt-4'>
            <CardHeader className='bg-info text-white'>
              <CardTitle className='font-weight-bold m-0'>
                {tagline ? tagline : 'Basic info'}
              </CardTitle>
            </CardHeader>
            <CardBody>
              <CardText className='m-0'>
                <strong className='mr-2'>Average rating:</strong>
                {vote_average && vote_count ? (
                  `${vote_average} / 10 from ${vote_count} votes`
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong className='mr-2'>Popularity score:</strong>
                {popularity ? (
                  popularity
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong className='mr-2'>Release date:</strong>
                {release_date ? (
                  release_date
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong className='mr-2'>Budget:</strong>
                {budget ? (
                  new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(budget)
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong className='mr-2'>Revenue:</strong>
                {revenue ? (
                  new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(revenue)
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong className='mr-2'>Genres:</strong>
                {genres ? (
                  genres.map((genre, index) =>
                    index !== genres.length - 1
                      ? `#${genre.name}, `
                      : `#${genre.name}`
                  )
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
              <CardText className='m-0'>
                <strong className='mr-2'>Production countries:</strong>
                {production_countries ? (
                  production_countries.map((country, index) =>
                    index !== production_countries.length - 1
                      ? `${country.name}, `
                      : country.name
                  )
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardText>
            </CardBody>
          </Card>
          {production_companies && (
            <Card className='mt-4'>
              <CardHeader className='bg-info text-white'>
                <CardTitle className='font-weight-bold m-0'>
                  Production Companies
                </CardTitle>
              </CardHeader>
              <CardBody>
                {production_companies ? (
                  production_companies.map((company, index) => (
                    <div key={company.id} className=''>
                      <p className='font-weight-bold m-0'>
                        {company.origin_country
                          ? `${company.name} (${company.origin_country})`
                          : company.name}
                      </p>
                      {company.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                          alt='Company logo'
                          className='company-image'
                        />
                      )}
                      {index !== production_companies.length - 1 && <hr />}
                    </div>
                  ))
                ) : (
                  <i className='fas fa-question text-info' />
                )}
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Movie;
