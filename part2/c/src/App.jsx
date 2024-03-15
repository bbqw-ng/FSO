import Note from './components/Note.jsx'
//Left Off: Control Component
import {useState} from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    //default actions reload the page, we don't want that so we do event.preventDefault
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    //this creates a copy of the notes array with the added noteObject. **NEVER MUTATE STATE DIRECTLY
    setNotes(notes.concat(noteObject))
    //here it resets the value of the input element
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    //we did not prevent default because changing the input of something does not cause a default action.
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    //ternary operator here
    //condition ? val1 : val2
    //if condition true, will take value 1, else wil take value 2
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
