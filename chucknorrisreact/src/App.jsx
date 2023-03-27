import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Styles/App.css'
import Button from './Components/Button'
import Dropdown  from './components/Dropdown'


function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")



  let loadJokeCallback = function(){
﻿  let url2 = "https://api.chucknorris.io/jokes/random" + (currentCategory==="" ? "": "?category="+currentCategory)
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
  if(categories.length === 0){
    fetch(url).then((resp)=>{
      return resp.json()
    }).then(list=>{
      setCategories(list)
    }).catch((e)=>{
      console.log((e))
  
    })
  
  }
  



  return (
    <div className='App'>
      <h1>Benvenuti</h1>
      <p>Sito Chuck</p>
      <Dropdown options={categories} callback={setCurrentCategory}></Dropdown>
      <div id='contenutoJoke'>
    <Button text="carica il joke" callback={loadJokeCallback}></Button>
    <Button text="copia" variant={joke === "" ? "disabled": undefined }callback={copyTextCallback}></Button>
      </div>
    </div>
  )
}

export default App

