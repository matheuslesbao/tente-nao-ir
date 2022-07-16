import { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

interface IMaxPt {
  name: any
}
export type Points = {
  points?: number
}

export function Panel({ points }: Points) {
  const [maxPoints, setMaxPoints] = useState<any>(10)
  points = maxPoints

  return (
    <div className="flex justify-around mx-auto mt-6 text-2xl">
      {/* Button de adicionar player */}
      {/* <button className="inline-flex p-1 gap-2 items-center hover:bg-gray-700 rounded-lg">
        <FaPlusCircle />
        Add Player
      </button> */}
      <div className=" "> Pontuação final: {maxPoints}</div>
      {/* input de adicionar pontuação final */}
      <div className="invisible">
        <input
          className="text-lg text-black p-1 rounded-full w-10 overflow-hidden "
          type="number"
          id="maxPt"
          placeholder=""
          onChange={event => {
            setMaxPoints(event.target.value)
          }}
        />

        <button className=" text-white bg-sky-500 active:bg-sky-600 font-bold uppercase text-sm p-2 rounded-full shadow hover:shadow-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-400">
          OK
        </button>
      </div>
    </div>
  )
}
