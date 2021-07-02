import {
    CHANGE_DISPLAY_SUBMENU,
    INIT_CATALOG,
    INIT_CATALOG_FAIL,
    INIT_CATALOG_SUCCESS,
    SET_ACTIVE_ID,
} from '../constants/actionTypes'

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
        case INIT_CATALOG:
            return {
                ...state,
                isLoading: true
            }
        case INIT_CATALOG_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: action.payload
            }
        case INIT_CATALOG_FAIL:
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
