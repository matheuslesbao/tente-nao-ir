import { useEffect, useState } from 'react'
import { Button } from './Button'

export function Player() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Você riu ${count} vezes`
  })
  return (
    <div className="m-6">
      Player
      <div className="my-4 py-2 text-6xl border-dashed border-2 border-sky-500 ">
        {count}
      </div>
      <div className="">
        <Button />
      </div>
    </div>
  )
}
