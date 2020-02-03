import React, { useState, useEffect } from 'react'
import Country from './components/Country'
import Filter from './components/Filter'
import axios from 'axios'
import Weather from './components/Weather'

const Countries =(props) => {
  let countriesToShow = props.countries
  //console.log("Countries 2" , props.countriesToShow)
  //console.log("Countries 3" , props.searchCountry)

 if(props.searchCountry !=='') {
     countriesToShow = props.countries.filter(country => country.name.toLowerCase().includes(props.searchCountry.toLowerCase()))
    // console.log("Countries 4 filter" , countriesToShow.length)
  }
  const weatherToShow = props.showWeather
  
  if(countriesToShow.length > 10 && props.searchCountry ===''){
      //console.log("countriesToShow > 10 and '' ", countriesToShow.length) 
      return(
        <Filter searchCountry={props.searchCountry} handleFilterChange={props.handleFilterChange} />
      )
  } 
      
  else if(countriesToShow.length > 10 && props.searchCountry !==''){
      //console.log("countriesToShow > 10 and !'' ", countriesToShow.length) 
      return (
       <div>
          <Filter searchCountry={props.searchCountry} handleFilterChange={props.handleFilterChange} />
          <p>Too many matches, specify another filter</p>
       </div>
       )
      } 
  else if(countriesToShow.length === 1 && props.searchCountry !==''){
      //console.log("countriesToShow One ", countriesToShow.length) 
      return (
       <div>
        {countriesToShow.map((country, i) => 
          <Country key={i} country={country} setSearchCountry={props.setSearchCountry}
           showWeather={props.showWeather} setWeather={props.setWeather} 
           searchCountry={props.searchCountry} handleFilterChange={props.handleFilterChange} 
           number='1' />
        )} 
        </div>
      )
    }
    return (
       <div>
          <Filter searchCountry={props.searchCountry} handleFilterChange={props.handleFilterChange} 
              setSearchCountry={props.setSearchCountry} />

            {countriesToShow.map((country, i) => 
           <Country key={i} country={country} 
            setSearchCountry={props.setSearchCountry}
            showWeather={props.showWeather} setWeather={props.setWeather} 
            number='0' />
         )}
       </div>
    )

}

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [showAll, setShowAll] = useState('')
  const [showWeather, setWeather] = useState('')

   useEffect(() => {
     //console.log('effect')
     axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
           //console.log('promise fulfilled')
           setCountries(response.data)
           //console.log('promise fulfilled countries ', response.data)
        })  
  }, [])  

  const handleFilterChange = (event) => {
     //console.log("App handleFilterChange event.target.value")
     //console.log(event.target.value)
     setSearchCountry(event.target.value)  
     //console.log("App handleFilterChange searchCountry", searchCountry)
  }
  //console.log("App handleFilterChange searchCountry", searchCountry)

  //const handleButtonClick = (event) => {
  const handleClick = (event) => {
    //console.log("button event ")
    //console.log(event.target.value)
     //setSearchCountry(event.target.value)
     setSearchCountry(event.target.value)
  }

  return (
    <div>

     <Countries countries={countries} showWeather={showWeather} setWeather={setWeather}  
        handleFilterChange={handleFilterChange} searchCountry={searchCountry} 
        setSearchCountry={setSearchCountry} handleClick={handleClick} />
                   
     </div>
  )

 
}
export default App;
