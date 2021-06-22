import { CHANGE_DISPLAY_SUBMENU } from '../constants/actionTypes'

const initialMenuState = {
    displaySubmenu: 'hide',
}

export function menuReducer(state = initialMenuState, action) {
    switch (action.type) {
        case CHANGE_DISPLAY_SUBMENU:
            return { ...state, displaySubmenu: action.payload }
        default: return state
    }
}