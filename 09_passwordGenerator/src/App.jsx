import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  //use ref hook
  const passordRef = useRef(null);


  // reuse passwordGenerator function using useCallback ho4ok
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!#$%&'()*+,-/:<=>?@[\]^_`{|}~"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) //optimize


  // run karne wale hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  //copy to clipboard
  const copyPasswordToClipboard =
    useCallback(() => {
      passordRef.current?.select();
      // passordRef.current?.setSelectionRange(0,3)   //for select 0 to 3 range
      window.navigator.clipboard.writeText(password);
    }, [password])



  return (
    <>
      <div className='w-full max-w-md mx-auto mt-[300px] shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} placeholder='Password' className='outline-none w-full py-1 px-3 ' readOnly ref={passordRef} />
          <button onClick={copyPasswordToClipboard} className='outline-none  text-white px-3 py-0.5 shrink-0 bg-blue-700'>Copy</button>
        </div>

        <div className='flex gap-x-2 text-sm'>
          <div className='flex items-center gap-x-1'>
            <input type="range" max={30} min={6} value={length} className='cursor-pointer ' onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
