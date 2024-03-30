import { useSelector } from "react-redux"
import CreateUser from "../features/user/CreateUser"
import Button from "./Button"

function Home() {
  const username = useSelector(state => state.user.username)
  return (
    <div className="my-10 text-center">
      <h1 className="text-xl font-semibold text-stone-700 mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? <CreateUser /> : <Button to='/menu' type='primary'>Continu Ordering { username }</Button>}
    </div>
  )
}

export default Home
