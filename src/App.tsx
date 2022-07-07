import { useState } from 'react'
import { Header } from './components/Header'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
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
