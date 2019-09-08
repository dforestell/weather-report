import React from 'react';
import './App.css';

//components
import TopSection from './components/topSection';
import BottomSection from './components/bottomSection';

//styles 
import './sass/app.scss'

import axios from 'axios';

const WEATHER_KEY = '87ee6365c40346c69f6225656190709'; 

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      cityName: "Chicago",
      forecastDays: 5,
      isLoading: true,
    };
  }

  componentDidMount(){
    const { cityName, forecastDays } = this.state;

    const URL = `https://api-cdn.apixu.com/v1/forecast.json?key=${WEATHER_KEY} &q=${cityName} &days=${forecastDays}`
    axios.get(URL)
    .then(res => {
      return res.data;
    }).then((data) => {
      this.setState({ 
        temp_f: data.current.temp_f, 
        isDay: data.current.is_day, 
        text: data.current.condition.text, 
        iconURL: data.current.condition.icon,
        isLoading: false,
      })
    }) 
    .catch(err =>{
      if (err) console.log("Cannot fetch data from API:", err )
    })
  }
  
 render(){
  return (
    <div className="app-container">
      <div className="main-container">
        {this.state.isLoading && <h3>Weather is Loading....</h3>}
        {!this.state.isLoading && 
        <div className="top-section">
          < TopSection location={this.state.cityName} temp_f={this.state.temp_f} isDay={this.state.isDay} text={this.state.text} iconURL={this.state.iconURL} />
         </div>
        }
         <div className="bottom-section">
          < BottomSection />
         </div>
      </div>

    </div>
  );
 }
}

export default App;
