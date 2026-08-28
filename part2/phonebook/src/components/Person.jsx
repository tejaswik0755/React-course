const Persons = ({ persons, newSearch }) => {
  return (
    <>
      {persons.map(person => {
        if (newSearch === '' || person.name.includes(newSearch)) {
          return (
            <p key={person.id}>
              {person.name} {person.phone}
            </p>
          )
        }
      })}
    </>
  )
}
export default Persons