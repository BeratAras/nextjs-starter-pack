import * as TYPES from '../types'

const initState = {
    user: [],
    loggedIn: false,
}

const userReducer = (state = initState, action) => {
    switch (action.type){
        case TYPES.SET_USER:
            return {...state, user: action.payload, loggedIn: true}
        case TYPES.RESET_USER:
            return {...state, user: [], loggedIn: false}
        default:
            return state;
    }
}

export default userReducer;