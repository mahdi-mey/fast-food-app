import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import Button from '../../ui/Button';

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
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  )
}

export default Cart
