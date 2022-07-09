import { Player } from './components/Player'

function App() {
  return (
    <div className="App">
      <div className="text-center w-auto">
        <header className=" bg-gray-700 border-b-[0.1px] border-b-sky-300">
          <h1 className="text-6xl my-1">Tente Nao Rir</h1>
        </header>
        <main>
          <div id="players" className="inline-flex text-4xl gap-4 mt-3">
            <Player />
            <Player />
            <Player />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
