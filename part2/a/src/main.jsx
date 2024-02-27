import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  }
  ,
  {
    id: 2,
    content: 'Browsers can only execute Javascript',
    important: false,
  }
  ,
  {
    id: 3,
    content: 'GET and POST are the most imporatnt methods of HTTP protocol',
    important: true,
  }
]
ReactDOM.createRoot(document.getElementById('root')).render( <App notes={notes}/>)
