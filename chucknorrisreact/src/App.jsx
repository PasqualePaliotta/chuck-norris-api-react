import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Styles/App.css'
import Button from './Components/Button'


function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  let loadJokeCallback = function(){
    console.log("ciao")
    setJoke("testo")
  }

  let copyTextCallback = function(){
    console.log("bye")

  }
  return (
    <div className='App'>
      <h1>Benvenuti</h1>
      <p>Sito Chuck</p>
      <div id='contenutoJoke'>
        <button onClick={() => setCount((count) => count+1)}>
          count is {count}
        </button>
    <Button text="carica il joke" callback={loadJokeCallback}></Button>
    <Button text="copia" variant={joke === "" ? "disabled": undefined }callback={copyTextCallback}></Button>
      </div>
    </div>
  )
}

export default App

