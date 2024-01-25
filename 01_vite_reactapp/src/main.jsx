import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return <>
    <h1>Custom APP chai</h1>
  </>
}
//run hbe naaaa..custom render object eta
// const reactElement={
//   type: 'a',
//   props:{
//     href: 'https://google.com',
//     target:'_blank'
//   },
//   children:'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target='__blank'>Visit google</a>

)

//following this way we can create react element
const aontherUser = "   hiiiiiiiiiiiiiiiiiii"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  aontherUser 
)

ReactDOM.createRoot(document.getElementById('root')).render(


  // anotherElement,  
  reactElement,  
  // <App />
 
)
