import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)     //hook
  //let counter=15;
  const addValue=()=>{
    //  console.log("clicked ",counter, Math.random())   
    //  counter=counter+1;  //ui updates hbe na hooks lagbe, react er power eta, react control ui updation
      setCounter(counter+1)

  }
  const removeValue=()=>{

    if(counter>0){
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>     
      <h2>Counter: {counter}</h2>
      <button  onClick={addValue}>Add value  {counter}</button>
      <br />
      <button  onClick={removeValue}>Remove value  {counter}</button>
    </>
  )
}

export default App
