import * as TYPES from '../types';

const setUserAction = (user) => ({
    type: TYPES.SET_USER,
    payload: user,
})

const resetUserAction = () => ({
    type: TYPES.RESET_USER,
})

export  {setUserAction, resetUserAction}