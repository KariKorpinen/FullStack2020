import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {
   //console.log("weather ", props);

   useEffect(() => {
     console.log('effect')
     axios
     .get('http://api.openweathermap.org/data/2.5/find?appid=dab7624bf6411df5cb474302ca66deaa&units=metric&q=' + props.capital)
     .then(response => {
       props.setWeather(response.data)
       console.log("weather 2 ",props.showWeather)

        })  
   }, [])  

   //console.log("weather 3 ",props.showWeather)
  
  return (
    <div>
       <h2>Weather in {props.capital}</h2>
       <li>Temperature {props.showWeather.temp}
      </li>
      <li>{props.showWeather.message}
      </li>
      <li>Rain {props.showWeather.rain}
      </li>
      <li>Snow {props.showWeather.snow}
      </li>
      <li>Clouds {props.showWeather.clouds}
      </li>
      <li>Wind speeed {props.showWeather.wind}
      </li>
      <li>{props.showWeather.dt}
      </li>
      
      </div>
    )

}

export default Weather