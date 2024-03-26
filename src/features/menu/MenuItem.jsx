/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers"
import Button from "../../ui/Button"

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium ">{name}</p>
        <p className="text-sm italic text-stone-600 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto text-sm flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase">Sold out</p>
          )}
          <Button type="small">Add to cart</Button>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
