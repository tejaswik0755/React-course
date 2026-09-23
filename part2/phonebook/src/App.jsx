import { useEffect, useState } from 'react'
import Notification from './components/Notification'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './components/Person'
import personService from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [newMsg, setNewMsg] = useState(null)
  const [success, setSuccess] = useState(false)
  const handleNewName=(event)=>{
    setNewName(event.target.value)
  }
  const handleNewPhone=(event)=>{
    setNewPhone(event.target.value)
    }
  const handleNewSearch=(event)=>{
    setNewSearch(event.target.value)
  }
  useEffect(()=>{
    personService
    .getAll()
    .then(initialPerson=>setPersons(initialPerson))
  },[])

  const addNewField=(event)=>{
    event.preventDefault()
    const person=persons.find(p=>p.name===newName)
    if (person){
      if(window.confirm(`${person.name} is already in phone, do you want to replace with new number?`)){
        const modifiedPerson={...person, phone:newPhone}
        personService
        .update(person.id, modifiedPerson)
        .then(res=>{
          setPersons(persons.map(p=>p.id===res.id?modifiedPerson:p))
          setNewMsg(`contact of ${res.name} is updated to latest number`)
          setSuccess(true)
          setTimeout(()=>{
              setNewMsg(null)
          },5000)
        })
        .catch(error=>{
          setNewMsg(`the contact of ${person.name} is already removed from server`)
          setSuccess(false)
          setTimeout(()=>{
            setNewMsg(null)
          },5000)
          setPersons(persons.filter(n=>n.id!==person.id))
        })
      }
    }else{
    const nameObject={
      name: newName ,
      phone: newPhone,
      id: String(persons.length+1)
    }
    personService
    .create(nameObject)
    .then(returnedPerson=>{
    setPersons(persons.concat(returnedPerson))
    setNewName('')
    setNewPhone('')
    setNewMsg(`contact of ${nameObject.name} is added to phonebook`)
    setSuccess(true)
    setTimeout(()=>{
      setNewMsg(null)
      },5000)
    })
  }}

  const deletePerson=id=>{
    personService
    .remove(id)
    .then(res=>{
      setPersons(persons.filter(p=>p.id!==res.id))
    })
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={newMsg} success={success}/>
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
        deletePerson={deletePerson}
      />

    </div>
  )
}

export default App