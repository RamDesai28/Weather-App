import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({ 
        city:"kolhapur",
        feelsLike: 23.84,
        humidity: 91,
        temp: 23.1,
        tempMax: 23.1,
        tempMin: 23.1,
        weather: "overcast clouds"
      })
      
      let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
       
      }
    return(
        <div className='all' style={{textAlign:"center"}}>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}