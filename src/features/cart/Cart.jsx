import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux"
import { clearAllCart, getCart } from "./cartSlice"
import EmptyCart from "./EmptyCart"

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(getCart)
  const username = useSelector((state) => state.user.username)
  // const cart = actualCart

  if (!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-3">
      <Link to="/menu" className="text-sm text-blue-500 hover:text-blue-700">
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="border-b-1 mt-3 divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearAllCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart
