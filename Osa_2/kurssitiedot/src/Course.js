import React from 'react'

const Header = (props) => {
   //console.log("header ", props)
   return(
      <div>
        <h2>{props.name}</h2>
      </div>
   )
}
const Content = (props) => {
	//console.log("content loki ", props.part.name)
	return(
     <div>
        <Part part={props.part.name} exercises={props.part.exercises}  />
     </div>
  )
}
const Part = (props) => {
	//console.log("part loki ", props.part)
   return (
    <div>
       {props.part} <br></br>
       Exercises {props.exercises} <p></p>
    </div>
    )       
}
  
const Total = (props) => {
   //console.log("total loki ", props.total)
   const totalValue = props.total.reduce(
      (prev, cur) => prev + cur.exercises, 0
   ) ;
   return(
      <div>
         <b>
            Total number of exercises {totalValue}       
         </b>
      </div>
   )
}

const Course = (props) => {
    return (
       <div>
          <Header name={props.course.name} />  
          
          {props.course.parts.map((part, j) => 
          <Content key={j} part={part} />
          )}
 
          <Total total={props.course.parts} />
       </div>
    )
}
export default Course