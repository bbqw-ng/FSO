import DisplayPerson from './DisplayPerson.jsx'
const Person = ({persons, filter}) => {
  if (filter === '') {
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
        {persons.map(person => { if (person.name.toLowerCase().includes(filter.toLowerCase())) { 
          //now we need to return the actual content.
          return (
            <DisplayPerson key={person.id} name={person.name} number={person.number}/>
          )
        }})}
      </>
    )
  }
}

export default Person

