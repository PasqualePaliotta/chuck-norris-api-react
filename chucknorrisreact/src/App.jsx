import { useState } from 'react'
import './Styles/App.css'
import Title from './components/Title'
import Button from './Components/Button'
import Dropdown  from './components/Dropdown'
import Textarea from './components/Textarea'


function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")

  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")



  let loadJokeCallback = function(){
    let url = "https://api.chucknorris.io/jokes/random" + (currentCategory==="" ? "": "?category="+currentCategory)
    fetch(url).then((resp) => {
      return resp.json()
    }).then (JokeType=>{
      setJoke(JokeType.value)
    }).catch((e)=>{

    })
  }

  let copyTextCallback = function(){
    let Textarea = document.getElementById("Textarea");
    navigator.clipboard.writeText(Textarea.innerText);
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
      <Title></Title>
      <Dropdown options={categories} callback={setCurrentCategory}></Dropdown>
      <div id='contenutoJoke'>
    <Button text="carica il joke" callback={loadJokeCallback}></Button>
    <Button text="copia" variant={joke === "" ? "disabled": undefined }callback={copyTextCallback}></Button>
    <Textarea id="Textarea">{joke}</Textarea>
      </div>
    </div>
  )
}

export default App

