import React from 'react';
import '../../styles/Attribution.scss';

const Attribution = () => {
  return (
    <div id='attribution'>
      <div>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
        <img
          src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'
          alt='TMDB logo'
          className='tmdb-logo'
        />
      </div>
    </div>
  );
};

export default Attribution;
