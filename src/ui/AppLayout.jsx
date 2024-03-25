import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader"

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  return (
    <div className="grid h-[100svh] grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll my-10">
        <main className="max-w-3xl ml-auto mr-auto px-4">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}
