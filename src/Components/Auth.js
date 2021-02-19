import { useState } from "react"
import axios from "axios"

const Auth = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    axios.post("/auth/login", { email, password }).then((res) => {
      console.log(res.data)
      setEmail("")
      setPassword("")
    })
  }

  const register = () => {
    axios.post("/auth/register", { email, password }).then((res) => {
      console.log(res.data)
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

export default Auth
