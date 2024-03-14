import { useState } from 'react'
import Filter from './component/Filter.jsx'
import PersonForm from './component/PersonForm.jsx'
import Person from './component/Person.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 0 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [idTracker, setIdTracker] = useState(1)
  const [nameFilter, setNameFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (!checkDuplicateName()) {
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
  
  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} filterChange={handleNameFilterChange}/> 
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Person persons={persons} filter={nameFilter}/>
     </div>
  )

}

export default App
