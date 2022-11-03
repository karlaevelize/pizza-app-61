import axios from 'axios'
import { loginSuccess } from './slice';
// 1. Post request to login

const apiUrl = "https://codaisseur-coders-network.herokuapp.com";

export const login = (email, password) => async (dispatch, getState) => {
  
  //get token
  const responseToken = await axios.post(`${apiUrl}/login`, {
    email, password
  })
  // console.log("login response thunk", response)
  const token = responseToken.data.jwt
  localStorage.setItem("token", token)
  const responseProfile = await axios.get(`${apiUrl}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  // console.log("profile response thunk", responseProfile)
  const profile = responseProfile.data
  dispatch(loginSuccess({ token, profile }))
}

export const persistLogin = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token")
  console.log("token in persist", token )
  if (!token) return

  const responseProfile = await axios.get(`${apiUrl}/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const profile = responseProfile.data
  // console.log("profile in persist", responseProfile)

  dispatch(loginSuccess({ token, profile }))
}


