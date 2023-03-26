import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Styles/App.css'
import Button from './Components/Button'


function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  let loadJokeCallback = function(){
    let cat = document.getElementById ("JokeType").value
﻿  let url2 = "https://api.chucknorris.io/jokes/random" + (cat!=="random" ? "?category=" + cat : "")
    fetch(url2).then((resp) => {
      return resp.json()
    }).then (JokeType=>{
      setJoke(JokeType.value)
    }).catch((e)=>{

    })
  }

  let copyTextCallback = function(){
    console.log("bye")

  }

  let url = "https://api.chucknorris.io/jokes/categories"
  fetch(url).then((resp)=>{
    return resp.json()
  }).then(JokeType=>{
    JokeType.unshift ("random")
    setCategory(JokeType)
  }).catch((e)=>{

  })




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

