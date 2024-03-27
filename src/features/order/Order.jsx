import { useLoaderData } from "react-router-dom"
import { getOrder } from "../../services/apiRestaurant"
import OrderItem from "./OrderItem"

// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers"

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
}

function Order() {
  const order = useLoaderData()
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order
  const deliveryIn = calcMinutesLeft(estimatedDelivery)

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 text-sm uppercase text-red-50 tracking-wide rounded-full py-2 px-2">
              Priority
            </span>
          )}
          <span className="bg-green-500 text-sm uppercase text-red-50 tracking-wide rounded-full py-2 px-2">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  )
}

export default Order

export async function loader({ params }) {
  console.log(params.id)
  const order = await getOrder(params.id)
  return order
}
