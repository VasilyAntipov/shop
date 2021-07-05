import {
    CHANGE_DISPLAY_SUBMENU,
    INIT_MENU,
    INIT_MENU_FAIL,
    INIT_MENU_SUCCESS,
    SET_ACTIVE_ID,
} from '../constants'

const initState = {
    displaySubmenu: 'hide',
    activeId: null,
    isLoading: false,
    isLoaded: false,
    items: [{name:'vasya'}, {name:'misha'}],
    error: null,
}

export function menuReducer(state = initState, action) {
    switch (action.type) {
        case CHANGE_DISPLAY_SUBMENU:
            return {
                ...state,
                displaySubmenu: action.payload
            }
        case INIT_MENU:
            return {
                ...state,
                isLoading: true
            }
        case INIT_MENU_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: action.payload
            }
        case INIT_MENU_FAIL:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }
        case SET_ACTIVE_ID:
            return {
                ...state,
                activeId: action.payload
            }
        default:
            return state
    }
}
