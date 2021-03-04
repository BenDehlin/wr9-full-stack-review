import * as yup from "yup"

export const authSchema = yup.object({
  email: yup.string().required().email().min(5).max(250),
  password: yup.string().required().min(10),
//   profile_pic: yup.string().url().notRequired(),
//   confirm: yup
//     .string()
//     .required()
//     .min(10)
//     .onOf([yup.ref("password", "Passwords must match")]),
})
