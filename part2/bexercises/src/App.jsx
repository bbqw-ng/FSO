import { useState } from 'react'

const DisplayPerson = ({ name }) => {
  return (
    <p style={{margin: 0}}>{name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [idTracker, setIdTracker] = useState(0)

  const addName = (event) => {
    event.preventDefault()
    let nameSeen = false

    persons.map((person) => {
      if (person.name === newName) {
        nameSeen = true
        alert(`${newName} is already added to phonebook`)
      }
    }) 
    
    if (!nameSeen) {
      const newPerson = [{ name: newName, id: idTracker}]
      setPersons(persons.concat(newPerson))
      setNewName('')
      setIdTracker(idTracker + 1)
    }

    console.log(persons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <DisplayPerson key={person.id} name={person.name}/>)}
    </div>
  )
}

export default App
