import { Formik, Form } from "formik"
import CustomTextField from "./CustomTextField"
import { authSchema } from "../utils/schema"
import axios from "axios"
import { setUser } from "../redux/authReducer"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import { useHistory, useLocation } from "react-router-dom"

const NewAuth = (props) => {
  const { push } = useHistory()
  const { state } = useLocation()

  const login = (body, { resetForm }) => {
    console.log(body)
    axios.post("/auth/login", body).then(({ data }) => {
      props.setUser(data)
      resetForm()
      push(state ? state.from : "/movies")
    })
  }

  const register = (body, { resetForm }) => {
    axios.post("/auth/register", body).then(({ data }) => {
      props.setUser(data)
      resetForm()
      push(state ? state.from : "/movies")
    })
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={login}
      validationSchema={authSchema}
    >
      {(data) => {
        console.log(data)
        return (
          <Form>
            <CustomTextField name="email" />
            <CustomTextField name="password" />
            <Button type="submit">Login</Button>
            <Button onClick={() => register(data.values, data.resetForm)}>
              Register
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default connect(null, { setUser })(NewAuth)
