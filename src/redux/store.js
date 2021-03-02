import { createStore, combineReducers } from "redux"
import authReducer from "./authReducer"
import movieReducer from "./movieReducer"

const rootReducer = combineReducers({
  authReducer,
  movieReducer,
})

export default createStore(rootReducer)
