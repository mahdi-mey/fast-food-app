/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { formatCurrency } from "../../utils/helpers"
import Button from "../../ui/Button"
import { addItem, getCurrentQuantityById } from "../cart/cartSlice"
import DeleteItem from "../cart/DeleteItem"
import UpdateItemsQuantity from "../cart/UpdateItemsQuantity"

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isInCart = currentQuantity > 0
  const dispatch = useDispatch()

  function addToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium ">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase">Sold out</p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-6">
              <UpdateItemsQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={addToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
