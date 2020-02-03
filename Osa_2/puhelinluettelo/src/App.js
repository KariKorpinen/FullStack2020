import React, { useState, useEffect } from 'react'
import Phone from './components/Phone'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import phoneService from './services/phones'

const App = () => {
  
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  //const [showAll, setShowAll] = useState(true)
  const [showAll, setShowAll] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [searchItemsFind, setItemsFind] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [normalMessage, setNormalMessage] = useState(null)

  useEffect(() => {
     phoneService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
       })
   
  }, [])  
  //console.log('render', persons.length, 'persons')

  const addPhone = (event) => {
      event.preventDefault()
      //console.log('button clicked', event.target)
      //event.target = tapahtuman kohde
      //console.log("persons 1 ", newName)
      //console.log("persons 2 ", persons.find(element => element === newName))
      const exists = persons.find(element => element.name === newName)
      console.log("persons 2 ", exists)
      if (exists){
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            console.log("update")
            phoneService
            //.delPhone(phoneObject)
             .update(exists.id, {...exists, number: newNumber})
             .then(updatedPhone => {
                setPersons(persons.map(phone => phone.id !== exists.id ? phone : updatedPhone))  
              setNormalMessage("Number updated")     
              setTimeout(() => {
                setNormalMessage(null)
              }, 5000)
             })  
             .catch(error => {
                setErrorMessage(
                  `Person '${newName}' was already removed from server`
                )
                setTimeout(() => {
                   setErrorMessage(null)
                }, 5000)
                setPersons(persons.filter(phone => phone.id !== exists.id))
              })  
             console.log("update2 " ,persons)
             setNewName('')
             setNewNumber('')
             }
        }
        
      //}
      else {
      
      const phoneObject = {
         name: newName,
         number: newNumber
         //important: Math.random() > 0.5,
         //id: newName,
      }
      phoneService
         .create(phoneObject)
          .then(returnedPhone => {
          setPersons(persons.concat(returnedPhone))  
          setNormalMessage(`Person '${newName}' added`)     
              setTimeout(() => {
                setNormalMessage(null)
              }, 5000)
          })
          .catch(error => {
                setErrorMessage(
                  `Error happen, person '${newName}' not added`
                )
                setTimeout(() => {
                   setErrorMessage(null)
                }, 5000)
                //setPersons(persons.filter(phone => phone.id !== exists.id))
              })  
           
    }
      setNewName('')
      setNewNumber('')
      setSearchItem('')
  }

  const deletePhone = id => {
    if (window.confirm('Are you sure you wish to delete this item?')) {

     phoneService
         //.delPhone(phoneObject)
         .delPhone(id)
          .then(returnedPhone => {
          setPersons(persons.filter(persons => persons.id !== id))  
          setNormalMessage("Number deleted")     
              setTimeout(() => {
                setNormalMessage(null)
              }, 5000)
          }) 
          .catch(error => {
                setErrorMessage(
                  `Person '${newName}' and number was already removed from server`
                )
                setTimeout(() => {
                   setErrorMessage(null)
                }, 5000)
                setPersons(persons.filter(persons => persons.id !== id))
              })   
     }
  }
  
  const handleNameChange = (event) => {
     console.log(event.target.value)
     setNewName(event.target.value)  
  }
  const handleNumberChange = (event) => {
     console.log(event.target.value)
     setNewNumber(event.target.value)  
  }

  const handleFilterChange = (event) => {
     console.log(event.target.value)
     setSearchItem(event.target.value)  
  }

  const phonesToShow = showAll
     ? persons
     : persons.filter(person => person.name.toLowerCase().includes(searchItem))


   useEffect(() => {
     
          const filterResults = persons.filter(person => 
      //console.log("search item ", searchItem)
      person.name.toLowerCase().includes(searchItem)
    );
    setItemsFind(filterResults);
    
   }, [searchItem])
  
  
  const ErrorNotification = ({ errorMessage }) => {
     if (errorMessage === null) {
       return null
     }
     return (
        <div className="error">
          {errorMessage}
        </div>
     )
  }

  const NormalNotification = ({ normalMessage }) => {
     if (normalMessage === null) {
       return null
     }
     return (
        <div className="normal">
          {normalMessage}
        </div>
     )
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <NormalNotification normalMessage={normalMessage} />
      <ErrorNotification errorMessage={errorMessage} />
      
      <Filter searchItem={searchItem} handleFilterChange={handleFilterChange} 
      setShowAll={setShowAll} showAll={showAll}/>
          
        
      <h3>Add a new </h3>
      
      <PersonForm addPhone={addPhone} newName={newName}
           handleNameChange={handleNameChange} newNumber={newNumber}
           handleNumberChange={handleNumberChange}  />
    
      <h3>Numbers</h3>
      <ul>
         {phonesToShow.map((person, name) => 
           <Phone key={name} person={person} deletePhone={deletePhone} />
         )} 
      </ul>
      ...
    </div>
  )

}

/*<div>filter shown with: 
     <input 
        value={searchItem} 
        onChange={handleFilterChange} 
     />
  </div>
*/ 
 /* 
      <form onSubmit={addPhone}>
        <div>name: 
         <input 
            value={newName} 
            onChange={handleNameChange} 
          /></div>
        <div>number: 
         <input 
            value={newNumber} 
            onChange={handleNumberChange} 
          />       
        </div>

        <div><button type="submit">add</button></div>
        
      </form> */
      /*
      <h3>Numbers</h3>
      <ul>
         {phonesToShow.map((person, name) => 
           <Phone key={name} person={person}  />
         )} 
      </ul>
      */
export default App