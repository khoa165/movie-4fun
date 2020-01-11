import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavigationBar from './components/layout/NavigationBar';
import Home from './components/pages/Home';
import Movie from './components/movies/Movie';
import NotFound from './components/pages/NotFound';
import MovieState from './context/movie/MovieState';
import './App.scss';

const App = () => {
  return (
    <MovieState>
      <Router>
        <div className='App'>
          <NavigationBar />
          <Container className='mt-4 mb-5'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/movies/:id' component={Movie} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </MovieState>
  );
};

export default App;
