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

  const addName = (event) => {
    event.preventDefault()
    console.log("button clicked", event.target);
    const newPerson = [
      { name: newName }
    ]
    setPersons(persons.concat(newPerson))
    setNewName('')
    console.log(persons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
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
      {persons.map(person => <DisplayPerson key={0} name={person.name}/>)}
    </div>
  )
}

export default App
