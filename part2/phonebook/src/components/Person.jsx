  const Persons = ({ persons, newSearch, deletePerson }) => {
  return (
    <>
      {persons.map(person => {
        if (newSearch === '' || person.name.includes(newSearch)) {
          return (
            <p key={person.id}>
              {person.name} {person.phone}
              <button onClick={()=>{
                    if(window.confirm(`Delete ${person.name}?`)){deletePerson(person.id)}
                  }}>delete</button>
            </p>

          )
        }
      })}
    </>
  )
}
export default Persons