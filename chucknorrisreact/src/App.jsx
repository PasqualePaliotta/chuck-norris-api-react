import { useState } from 'react' //qualsiasi variabile che voglio inserire deve passare da usestate che restituisce una lista in cui il prijmo elemento è la variabile di
import reactLogo from './assets/react.svg'
import './styles/App.css'
import Title from "./components/Title"
import Button from "./components/Button"

function App() {

  return (
    <div className="App">
        <Title></Title>
        <Button />
        <div>Prova</div>
    </div>
  )
}

export default App

