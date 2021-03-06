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
      searchParam: "Chicago",
      cityName: "Chicago",
      numForecastDays: 4,
      isLoading: true,
    };
  }
  updateWeather(){
    const { searchParam, numForecastDays } = this.state;
  
    const URL = `https://api-cdn.apixu.com/v1/forecast.json?key=${WEATHER_KEY} &q=${searchParam} &days=${numForecastDays}`
    axios.get(URL)
    .then(res => {
      return res.data;
    }).then((data) => {
      this.setState({ 
        cityName: data.location.name,
        temp_f: data.current.temp_f, 
        isDay: data.current.is_day, 
        text: data.current.condition.text, 
        iconURL: data.current.condition.icon,
        isLoading: false,
        forecastDays: data.forecast.forecastday,
      })
    }) 
    .catch(err =>{
      if (err) console.log("Cannot fetch data from API:", err )
    })
  }
  componentDidMount(){
    const { eventEmitter } = this.props;

    this.updateWeather()

    eventEmitter.on("updateWeather", (newParam) => {
      this.setState({searchParam: newParam}, () => this.updateWeather())
    })
  }

  
  
 render(){
   const {
     cityName,
     temp_f,
     isDay,
     text,
     iconURL,
     forecastDays
   } = this.state

  return (
    <div className="app-container">
      <div className="main-container">
        {this.state.isLoading && <h3>Weather is Loading....</h3>}
        {!this.state.isLoading && 
        <div className="top-section">
          < TopSection 
          location={cityName} 
          temp_f={temp_f} 
          isDay={isDay} 
          text={text} 
          iconURL={iconURL} 
          eventEmitter={this.props.eventEmitter}
          />
         </div>
        }
         <div className="bottom-section">
          < BottomSection forecastDays={forecastDays} />
         </div>
      </div>

    </div>
  );
 }
}

export default App;
