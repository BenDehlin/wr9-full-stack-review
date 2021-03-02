const initialState = {
   user: null
}

const SET_USER = "SET_USER"

export function setUser(payload){
    return {
        type: SET_USER,
        payload
    }
}



export default function authReducer(state = initialState, action){
    switch(action.type){
        case SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}