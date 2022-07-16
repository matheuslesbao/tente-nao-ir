import { Children, ReactNode, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { Button } from './Button'
import { Panel, Points } from './Panel'

interface IPlayers {
  children: string | ReactNode
}

export function Player(props: IPlayers) {
  const [count, setCount] = useState(0)
  function increaseCount() {
    return setCount(count + 1)
  }
  function resetCount() {
    return setCount(count - count)
  }

  return (
    <div className="m-4w-full">
      {/* Button de fechar player  */}
      {/* <button className="flex p-1 cursor-pointer justify-end float-right">
        <VscChromeClose className="text-2xl rounded-md  hover:bg-gray-700" />
      </button> */}

      <h2
        className="text-2xl mx-2"
        contentEditable={true}
        spellCheck={false}
        suppressContentEditableWarning={true}>
        {props.children}
      </h2>

      <div className="my-4 py-2 text-6xl border-dashed border-2 border-sky-500 ">
        <span className="text-9xl">{count}</span>
        {/* <span className="text-xl absolute ml-3"> {} </span> */}
      </div>
      <Button
        onClick={increaseCount}
        name="Riu de mais"
        disabled={count > 6 ? true : false}
      />

      <Button
        onClick={resetCount}
        name="Reset"
        disabled={count > 6 ? false : true}
      />
    </div>
  )
}
