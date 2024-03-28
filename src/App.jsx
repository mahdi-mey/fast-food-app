import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./ui/Home"
import Menu, { Loader as menuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import { loader as orderLoader } from "./features/order/Order"

import Error from "./ui/Error"

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "order/:id",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
