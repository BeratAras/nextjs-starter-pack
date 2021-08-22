import * as TYPES from '../types';

const settingsAction = (settings) => ({
    type: TYPES.SET_SETTINGS,
    payload: settings,
})

export {
    settingsAction
}