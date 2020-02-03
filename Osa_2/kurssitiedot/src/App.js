import React from 'react'
import Course from './Course'

const App = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <ul>
        {courses.map((course, i) => 
          <Course key={i} course={course} />
        )}
      </ul>
    </div>
  )
}

export default App