import React, { useState, useContext } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import MovieContext from '../../context/movie/movieContext';
// import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const movieContext = useContext(MovieContext);
  // const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      // alertContext.setAlert('Please enter something', 'danger');
    } else {
      movieContext.searchMovies(text);
      setText('');
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            type='text'
            name='text'
            placeholder='Search movies...'
            value={text}
            onChange={onChange}
          />
        </FormGroup>
        <Button color='danger' block>
          Search
        </Button>
      </Form>
      {movieContext.movies.length > 0 && (
        <Button
          color='info'
          block
          onClick={movieContext.clearMovies}
          className='mt-3 mb-5'
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default Search;
