import { useState } from 'react'
import Button from './Button'
import Display from './Display'
import Statistics from './Statistics'
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title1="give feedback"
  const title2="statistics"

  const degree1="good"
  const degree2="neutral"
  const degree3="bad"
  
  const handleGood= ()=> {
    const updatedGood=good+1 
    setGood(updatedGood)
  }
    const handleNeutral= ()=> {
    const updatedNeutral=neutral+1 
    setNeutral(updatedNeutral)
  }
    const handleBad= ()=> {
    const updatedBad=bad+1 
    setBad(updatedBad)
  }
  return (
    <div>
      <Display title={title1} />
      <Button onClick={handleGood} text={degree1} />
      <Button onClick={handleNeutral} text={degree2} />
      <Button onClick={handleBad} text={degree3} />

      <Display title={title2} />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App