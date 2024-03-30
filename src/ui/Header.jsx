import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"

export default function Header() {
  return (
    <div className="flex justify-between border-b-2 border-stone-400 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-[5px]">
        Fast React pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  )
}
