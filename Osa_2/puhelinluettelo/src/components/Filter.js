import React from 'react'

const Filter = (props) =>{
	//console.log("Fillter 1 " , props)
	return (
   	<div>filter shown with: 
       <input 
          value={props.searchItem} 
          onChange={props.handleFilterChange} />
    </div>
  )

}

export default Filter