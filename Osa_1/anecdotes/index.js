import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {selected}
    {text}

  </button>
  
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array(6).fill(0))
  
  const handleButtonClick = () => {
    setSelected(Math.floor(Math.random() * (5 - 0 + 1) + 0))
  }
  const handleVoteButtonClick = () => {
     const copy = { ... voted}
     setVoted(copy[selected] += 1)
     //console.log("selected + 1 " , voted)
     //console.log("selected + 1 " , copy)
     //return copy
  }
  
  return (
    <div>
      {props.anecdotes[selected]}
      <p>has votes</p>
      <p><Button onClick={handleVoteButtonClick} text='vote' />
      <Button onClick={handleButtonClick} text='next anecdote' /></p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)