import { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes'
import Footer from './components/Footer'
const App = () => {
  const [notes,setNotes]=useState([])
  const [newNote,setNewNote]=useState('')
  const [showAll,setShowAll]=useState(true)
  const [errorMsg,setErrorMsg]=useState(null)
  useEffect(()=>{
    noteService
    .getAll()
    .then(initialNotes=>{
      setNotes(initialNotes)
    })
  }, [])

  const addNote=(event)=>{
    event.preventDefault()
    const noteObject={
      id:String(notes.length+1),
      important :Math.random()>0.5,
      content: newNote
    }
    noteService
    .create(noteObject)
    .then(returnedNote=>
    {
    setNotes(notes.concat(returnedNote))
    setNewNote('')
    }
  )}
  const handleNewNote=(event)=>{
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note=> note.important)

  const toggleImportanceOf=id=>{
    const note=notes.find(n=>n.id===id)
    const newNotes={...note, important: !note.important}

    noteService.update(id,newNotes)
    .then(returnedNote=>{
      setNotes(notes.map(note=>note.id===id?returnedNote:note))
    })
    .catch(error => {
        setErrorMsg(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMsg(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMsg} />
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show  { showAll? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note 
                key={note.id} 
                note={note}
                toggleImportance={()=>toggleImportanceOf(note.id)} />
        ))}
        <form onSubmit={addNote}>
          <input
              value={newNote}
              onChange={handleNewNote} />
          <button type="submit">save</button>
        </form>
      </ul>
      <Footer/>
    </div>
  )
}

export default App