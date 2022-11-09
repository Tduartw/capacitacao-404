import React from 'react';
import './app.scss'
import scarecrow from './assets/scarecrow.png'
export function PageNotFound() {

  return (
    <div className="wrapper">
      <header>
        <span>404 page not found</span>
      </header>
      <main className='content'>
        <div className='image'>
          <img src={scarecrow} alt="not found image" />
        </div>
        <div className='text'>
          <span>I have bad news for you</span>
          <p>The page you are looking for might be removed or is temporarily unavailable</p>
          <button>Back to homepage</button>
        </div>
      </main>
      <footer>created by username - devChallenges.io</footer>
    </div>
  )
}
