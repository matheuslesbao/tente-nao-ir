import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { Button } from './Button'

interface IPlayers {
  name: string
}

export function Player() {
  const [count, setCount] = useState(0)
  function increaseCount() {
    return setCount(count + 1)
  }
  function resetCount() {
    return setCount(count - count)
  }

  return (
    <div className="m-4w-full">
      <button className="flex p-1 cursor-pointer justify-end float-right">
        <VscChromeClose className="text-2xl rounded-md  hover:bg-gray-700" />
      </button>
      <h2 className="text-5xl">Player</h2>
      <div className="my-4 py-2 text-6xl border-dashed border-2 border-sky-500 ">
        <span className="text-9xl">{count}</span>
      </div>
      <Button
        onClick={increaseCount}
        name="Riu de mais"
        disabled={count == 10 ? true : false}
      />

      <Button
        onClick={resetCount}
        name="Reset"
        disabled={count > 9 ? false : true}
      />
    </div>
  )
}
