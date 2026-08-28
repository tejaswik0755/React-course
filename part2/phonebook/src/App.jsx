import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './components/Person'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleNewName=(event)=>{
    setNewName(event.target.value)
  }
  const handleNewPhone=(event)=>{
    setNewPhone(event.target.value)
    }
  const handleNewSearch=(event)=>{
    setNewSearch(event.target.value)
  }
  const addNewField=(event)=>{
    event.preventDefault()
    if (persons.some(person=> person.name === newName)){
      alert(`heyyaa, ${newName} is alreadyy theree broo`)
    }else{
    const nameObject={
      name: newName ,
      phone: newPhone,
      id: String(persons.length+1)
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewPhone('')
    }
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter 
        newSearch={newSearch} 
        handleNewSearch={handleNewSearch}  />

      <h2>Add new field here</h2>
      <PersonForm
        addNewField={addNewField}
        newName={newName} 
        handleNewName={handleNewName}
        newPhone={newPhone} 
        handleNewPhone={handleNewPhone}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newSearch={newSearch}
      />

    </div>
  )
}

export default App