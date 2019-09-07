import React from 'react';
import './App.css';

//components
import TopSection from './components/topSection';
import BottomSection from './components/bottomSection';

//styles 
import './sass/app.scss'

import axios from 'axios';

const WEATHER_KEY = '87ee6365c40346c69f6225656190709'; 

function App() {


  // componentDidMount(){
  //   const { cityName, forecastDays } = this.state;

  //   // const URL = `https://api-cdn.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forecastDays}`
  // };

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="top-section">
          < TopSection />
         </div>

         <div className="bottom-section">
          < BottomSection />
         </div>
      </div>

    </div>
  );
}

export default App;
