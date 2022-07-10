import { FaPlusCircle } from 'react-icons/fa'

export function Panel() {
  return (
    <div className="flex-auto mt-6 text-2xl">
      <button className="inline-flex p-1 gap-2 items-center hover:bg-gray-700 rounded-lg">
        <FaPlusCircle />
        Add Player
      </button>
    </div>
  )
}
