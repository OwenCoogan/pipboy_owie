import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/mains/header"
import Clock from './components/mains/clock';
import WeatherControl from './components/mains/weather';



function App() {
  return (
    <div class="App">
      <header class="App">
        <Clock/><Header/><WeatherControl/>
        
      </header>
       <main>
         <img src={logo} className="App-logo" alt="logo" />
       </main>
      <footer></footer>
    </div>
  );
}

export default App;
