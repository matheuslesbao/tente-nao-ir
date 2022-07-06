import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Tente Nao Rir</h1>
      </header>
      <main>
        <div id="players">
          <h2>Player 1</h2>
          <h2>Player 2</h2>
          <h2>Player 3</h2>
        </div>
        <div id="scores">
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </div>
      </main>
    </div>
  )
}

export default App
