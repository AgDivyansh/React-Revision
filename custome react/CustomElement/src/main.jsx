import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
function Gym ()
{
  return (
    <h1>Welcome to the gym</h1>
  )
}

const ran = React.createElement(
  
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visi google'
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
ran
)
