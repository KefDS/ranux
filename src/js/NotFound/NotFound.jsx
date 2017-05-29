import React from 'react';
import './_not-found.scss';

const NotFound = () => (
  <div className='not-found'>
    <h1 className='not-found__title'>
      Jumped too high, NOT FOUND!
    </h1>
    <img
      className='not-found__logo'
      src='src/assets/images/dead-rana-ico.png'
      alt='algo'
    />
  </div>
);


export default NotFound;
