import { Player } from './components/Player'

function App() {
  return (
    <div className="App text-center">
      <header className="bg-gray-700 border-b-[0.1px] border-b-sky-300">
        <h1 className="text-4xl">Tente Nao Rir</h1>
      </header>
      <main>
        <div id="players" className="inline-flex text-4xl gap-4">
          <Player />
          <Player />
          <Player />
        </div>
      </main>
      <div className="res"></div>
    </div>
  )
}

export default App
