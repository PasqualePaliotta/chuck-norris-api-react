import { useState } from 'react' //qualsiasi variabile che voglio inserire deve passare da usestate che restituisce una lista in cui il prijmo elemento è la variabile di
import reactLogo from './assets/react.svg'
import './App.css'
import Title from "./components/Title"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        hello {count}
        <Title />
        
    </div>
  )
}

export default App

