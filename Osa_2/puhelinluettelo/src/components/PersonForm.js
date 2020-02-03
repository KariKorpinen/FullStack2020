import React from 'react'

const PersonForm = (props) =>{
	console.log("Phone 1 " , props)
	//persons(props.persons)
   return (
   	 <div>
       <form onSubmit={props.addPhone}>
        <div>name: 
         <input 
            value={props.newName} 
            onChange={props.handleNameChange} 
          /></div>
        <div>number: 
         <input 
            value={props.newNumber} 
            onChange={props.handleNumberChange} 
          />       
        </div>

        <div><button type="submit">add</button></div>
        
      </form>
      </div>
   )

}

export default PersonForm