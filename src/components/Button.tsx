export interface IButton {
  name: string
  onClick?: () => void
  disabled?: boolean
}

export function Button(props: IButton) {
  return (
    <>
      <button
        onClick={props.onClick}
        className=" text-white bg-sky-500 active:bg-sky-600 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-400"
        disabled={props.disabled}>
        {props.name}
      </button>
    </>
  )
}
