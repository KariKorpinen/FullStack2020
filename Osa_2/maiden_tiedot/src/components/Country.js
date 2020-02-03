import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'
//import Filter from './Filter'

const Languages = (props) => {
	//console.log("country language ", props)
	return (
	   props.languages.map(language => <li key = {language.nativeName}>{language.name}</li>)
	)
} 

const Country = (props) => {
   //console.log("country js ", props.country.name)
   //console.log("country js 2", props.country.capital)


if(props.number ==='1') {
   return (
   	
   	<div>
    <h2>{props.country.name}</h2>
     capital {props.country.capital}
      <br />
      
      population {props.country.population}
      <br />
      <h3>
      Spoken Languages 
      </h3>
      <Languages languages={props.country.languages}/>

      <p>   
      <img style={{width: '50%', high: '50%'}} src={props.country.flag} alt="Flag" />
      </p>
      
      <Weather showWeather={props.showWeather} setWeather={props.setWeather} capital={props.country.capital} />     
      
      </div>
   )
  
}

return (
  <li>{props.country.name}
    <button type="button" onClick={() => props.setSearchCountry(props.country.name)}>
      show 
    </button>
  </li>
)
}

export default Country