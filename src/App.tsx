import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './assets/scss/styles.css';

function App() {
  return (
    <>
        <header className="portfolio-header">
            <div className="portfolio-header__content">
                <div>
                    <div className="portfolio-header__fname">Vinitra</div>
                    <div className="portfolio-header__lname">Muralikrishnan</div>
                </div>
                <div>
                    <a className='portfolio-header__btn-link'>About</a>
                </div>
            </div>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>*/}
        </header>
        <main className="portfolio-main">

        </main>
    </>
  );
}

export default App;
