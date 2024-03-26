/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <button className="bg-yellow-500 uppercase font-semibold text-stone-900 py-3 px-4 inline-block rounded-full hover:bg-yellow-300 transition-all focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 mt-4 disabled:cursor-not-allowed text-xs">
          Delete
        </button>

      </div>
    </li>
  )
}

export default CartItem
