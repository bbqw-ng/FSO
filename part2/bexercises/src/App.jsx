import { useState } from 'react'

const DisplayPerson = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 0},
    { name: 'sugma dook', number: '69919919919-91991919196', id: 1},
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [idTracker, setIdTracker] = useState(0)

  const addName = (event) => {
    event.preventDefault()
    const duplicateExists = checkDuplicateName()
    if (!duplicateExists) {
      //create a new person
      const newPerson = [{ name: newName, number: newNumber, id: idTracker}]
      //create a new array with new person added
      setPersons(persons.concat(newPerson))
      //resets the states of setNewName and NewNumber
      setNewName('')
      setNewNumber('')
      //increments id by 1
      setIdTracker(idTracker + 1)
    }
  }

  const checkDuplicateName = () => {
    let nameSeen = false
    persons.map((person) => {
      if (person.name === newName) {
        nameSeen = true
        alert(`${newName} is already added to phonebook`)
      }
    }) 
    return nameSeen
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange}/></div>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <DisplayPerson key={person.id} name={person.name} number={person.number}/>)}
    </div>
  )

}

export default App
