const initialState = {
  movies: [],
}

export function setMovies(payload) {
  return {
    type: "SET_MOVIES",
    payload,
  }
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload }
    default:
      return state
  }
}
