import { useState } from 'react'
import Button from './Button'
import Display from './Display'
import Title from './Title'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const n=anecdotes.length
  const [votes, setVotes] = useState(Array(n).fill(0) )
  const [selected, setSelected] = useState(0)
  const [maxVote, setMaxVote] =useState(0)
  const handleSelected = ()=>{
    //gettign a random index
    const newSelected= Math.floor(Math.random()*(anecdotes.length))
    //changing the value of the displayed anecdote
    setSelected(newSelected)
    //we also need to handle the vote, but it is not this button right, shit, i need to make another button
  }
  const handleVotes= ()=>{
    const updatedVotes=[...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)  
 //the updated value of votes com in the new array, then how the hell you can fnd the new update in older array, you shit
    const maxVoteIndex= updatedVotes.indexOf(Math.max(...updatedVotes))
    setMaxVote(maxVoteIndex)
//first we got the index of max, then we set using usestate fn, which we pass
  }
  return (
    <div>
      <Title title="Anecdote of the day" />
      <Display anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleSelected} text="next anecdote" />
      <Button onClick={handleVotes} text="vote" />
      <Title title="Anecdote with most votes" />
      <Display anecdote={anecdotes[maxVote]} votes={votes[maxVote]} />
    </div>
  )
}

export default App