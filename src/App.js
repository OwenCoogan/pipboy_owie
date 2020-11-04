// Core

import React from 'react';


// Files
import './App.css';
//Components

import Header from "./components/mains/header"
import Clock from './components/mains/clock';
import WeatherControl from './components/mains/weather';
import Slider from "./components/mains/mainSlider";


function App() {
  return (
    <div class="App">
      <header class="App">
        <Clock/><Header/><WeatherControl/>
      </header>
       <main>
         <Slider/>
       </main>
    </div>
  );
}

export default App;
