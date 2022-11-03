import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { logout } from "../store/user/slice"

const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <NavLink to="/login">Login</NavLink>{" "}
      <button onClick={() => dispatch(logout())} >Logout</button>
    </div>
  )
}

export default Navbar