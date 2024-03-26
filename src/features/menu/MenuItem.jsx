/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers"

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
          <button className="text-xs bg-yellow-500 uppercase font-semibold text-stone-900 py-2 px-3 inline-block rounded-full hover:bg-yellow-300 transition-all focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 mt-4 disabled:cursor-not-allowed md:text-base">
            Add To Cart
          </button>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
