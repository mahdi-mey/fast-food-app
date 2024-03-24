import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"

export default function Header() {
  return (
    <div className="bg-yellow-500 uppercase px-4 py-3 border-b-2 border-stone-400">
      <Link to="/" className="tracking-[5px]">
        Fast React pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  )
}
