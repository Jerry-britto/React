import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'
  },
  'Take me to google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    // reactElement
    <App />
    
)
