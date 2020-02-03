import React from 'react'

const Phone = ( props ) => {
  return (<li className="persons">{props.person.name}  {props.person.number}
          <button onClick={() => {props.deletePhone(props.person.id)}}>
           Delete </button>
  	</li>
  )
}

export default Phone