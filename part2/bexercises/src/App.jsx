import { useState } from 'react'
import DisplayPerson from './component/DisplayPerson.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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
      console.log(persons)
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
  
  const showFiltered = () => {
    if (nameFilter === '') {
      //return all persons.
      return (
        <>
          {persons.map(person => <DisplayPerson key={person.id} name={person.name} number={person.number}/>)}
        </>
      )
    } else {
      //here we need to return the first thing back into the App's return.
      return (
        <>
          {persons.map(person => { if (person.name.toLowerCase().includes(nameFilter.toLowerCase())) { 
            //now we need to return the actual content.
            return (
              <DisplayPerson key={person.id} name={person.name} number={person.number}/>
            )
          }})}
        </>
      )
    }
  }
      

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={nameFilter} onChange={handleNameFilterChange}/></div>
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
      <h3>Numbers</h3>
      {showFiltered()}
    </div>
  )

}

export default App
