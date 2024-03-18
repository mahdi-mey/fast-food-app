import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        {/* <h1>Some Random content</h1> */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
