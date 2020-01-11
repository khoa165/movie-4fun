import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie: { id, title, poster_path } }) => {
  return poster_path ? (
    <Col md='4' className='my-3'>
      <Card>
        <CardImg
          top
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt='Movie poster'
          className='border border-danger'
        />
        <CardBody className='text-center'>
          <CardTitle>{title}</CardTitle>
          <Link
            to={`/movies/${id}`}
            className='btn btn-info btn-sm btn-block my-1'
          >
            More info
          </Link>
        </CardBody>
      </Card>
    </Col>
  ) : null;
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;
