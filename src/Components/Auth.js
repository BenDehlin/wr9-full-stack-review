import { useState } from "react"
import axios from "axios"
import {setUser} from '../redux/authReducer'
import {connect} from 'react-redux'

const Auth = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    axios.post("/auth/login", { email, password }).then((res) => {
      props.setUser(res.data)
      setEmail("")
      setPassword("")
      props.history.push(props.location.state ? props.location.state.from : '/movies')
    })
  }

  const register = () => {
    axios.post("/auth/register", { email, password }).then((res) => {
      props.setUser(res.data)
      setEmail("")
      setPassword("")
    })
  }

  return (
    <div>
      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  )
}

export default connect(null, {setUser})(Auth)
