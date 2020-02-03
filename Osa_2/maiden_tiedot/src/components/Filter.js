import React from 'react'

const Filter = (props) =>{
	//console.log("Fillter 1 " , props)
  //console.log("Fillter 2 " , props.searchCountry)
  //console.log("Fillter 3 " , props.countriesToShow)
  
  return (
    <div>find countries 
       <input 
          value={props.searchCountry} 
          onChange={props.handleFilterChange} />

    </div>
   )
  } 

export default Filter