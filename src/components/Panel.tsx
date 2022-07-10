import { FaPlusCircle, FaRegWindowClose } from 'react-icons/fa'

export function Panel() {
  return (
    <div className="flex my-6 m-auto justify-around text-2xl">
      <div>
        <button className="inline-flex p-2 gap-2 items-center">
          <FaPlusCircle />
          Add Player
        </button>
      </div>
      <div>
        <button className="inline-flex p-2 gap-2 items-center ">
          <FaRegWindowClose />
          Delete Player
        </button>
      </div>
    </div>
  )
}
