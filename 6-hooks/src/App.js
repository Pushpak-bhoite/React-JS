import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './useContext/About'
import NoteContext from './useContext/NoteContext'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0)
  const btnRef = useRef(null)
  let b = 0
  useEffect(() => {
    a.current = a.current + 1
    b = b + 1;
    console.log(`The count a is ${a.current}`)
    console.log(`The count b is ${b}..........`)
  });
  function changeColour() {
    btnRef.current.style.backgroundColor = 'red';
  }

  return (
    <>
      <NoteContext >
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button
            ref={btnRef}
            onClick={() => {
              setCount((count) => count + 1);
              changeColour();
            }}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <About />
      </NoteContext>
    </>
  )
}

export default App
