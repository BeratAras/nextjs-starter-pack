import * as TYPES from '../types'

const initState = {
    settings: []
}

const settingsReducer = (state = initState, action) => {
    switch (action.type){
        case TYPES.SET_SETTINGS:
            return {...state, settings: action.payload}
        default:
            return state;
    }
}

export default settingsReducer;