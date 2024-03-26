import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
]

function Cart() {
  const cart = fakeCart

  return (
    <div className="py-3 px-4">
      <Link to="/menu" className="text-sm text-blue-500 hover:text-blue-700">
        &larr; Back to menu
      </Link>

      <ul className="divide-y divide-stone-200 border-b-1 mt-3">
        {cart.map(item => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <div className="mt-6 space-x-6">
        <Link to="/order/new" className="px-4 py-3 md:px-6 md:py-4 inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed">Order pizzas</Link>
        <button className="'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5'">Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart
