import { useDispatch } from "react-redux"
import { login } from "../store/user/thunks"

const LoginPage = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => dispatch(login("kelley@codaisseur.com", "abcd"))}>Login</button>
    </div>
  )
}

export default LoginPage
