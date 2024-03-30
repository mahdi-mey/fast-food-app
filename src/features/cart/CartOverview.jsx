import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice"

function CartOverview() {
  const totalPrice = useSelector(getTotalCartPrice)
  const totalQuantity = useSelector(getTotalCartQuantity)

  if (!totalQuantity) return null

  return (
    <div className="sm:px6 flex justify-between bg-stone-800 px-6 py-4 text-sm uppercase text-stone-200 md:text-base">
      <p className="space-x-6 font-semibold text-stone-300">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  )
}

export default CartOverview
