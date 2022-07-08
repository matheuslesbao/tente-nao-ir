import { useEffect, useState } from 'react'
import { Button } from './Button'

interface IPlayers {
  name: string
}

export function Player() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    return setCount(count + 1)
  }

  return (
    <div className="m-4w-full ">
      <h2 className="text-5xl">Player</h2>
      <div className="my-4 py-2 text-6xl border-dashed border-2 border-sky-500 ">
        <span className="text-9xl">{count}</span>
      </div>
      <Button onClick={increaseCount} name="Riu de mais" />
    </div>
  )
}
