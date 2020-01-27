import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}

  </button>
  
)

const Average = ( props) => (
  <p> average {props.ava/props.count}</p>
)

const Procent = ( props) => (
  <p> positive {(props.positive/props.all) * 100} % </p>
)

const Statistics = (props) => {
	if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
   return (
   <div>
      <h1>statistics</h1>
      <table>
      <tbody>
      <StatisticLine name="good" value={props.good}/>
      <StatisticLine name="neutral" value={props.neutral}/>
      <StatisticLine name="bad" value={props.bad}/>
      <StatisticLine name="all" value={props.counter}/>
      <StatisticLine name="average" value={props.ava/props.counter}/>
      <StatisticLine name="positive" value={(props.good/props.counter) * 100}  />
      </tbody>
      </table>
      	
   </div>
   )

}

const StatisticLine = ( props) => {
  if (props.name==="positive"){
  	return (<tr><td> {props.name}</td><td>{(Math.round(props.value * 10)/10)} % </td></tr>)
  }
  if (props.name==="average"){
  	return (<tr><td> {props.name}</td><td>{(Math.round(props.value * 10)/10)} </td></tr>)
  }
  return (
    <tr><td> {props.name}</td><td> {props.value}</td></tr>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [ava, setAverage] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
     setGood(good + 1)
     setCounter(counter + 1)  
     setAverage(ava + 1)
  }
  const handleNeutralClick = () => {
     setNeutral(neutral + 1)  
     setCounter(counter + 1)
     setAverage(ava + 0)
  }
  const handleBadClick = () => {
     setBad(bad + 1)  
     setCounter(counter + 1)
     setAverage(ava - 1)
  }
   
  return (
  	<div>
       <div>
          <h1>give feedback</h1>
          <Button onClick={handleGoodClick} text='good' />
          <Button onClick={handleNeutralClick} text='neutral' />
          <Button onClick={handleBadClick} text='bad' />
       </div>
       <Statistics good={good} neutral={neutral} bad={bad} counter={counter} ava={ava} />   
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)