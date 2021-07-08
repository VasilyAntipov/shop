import {
    INIT_MENU,
    INIT_MENU_FAIL,
    INIT_MENU_SUCCESS,
    INIT_SUB_MENU_SUCCESS,
    SET_ID_ACTIVE_MENU,
    SET_IS_MENU_ACTIVE,
    SHOW_CARD_SUB_MENU
} from '../constants'

const initState = {
    idActiveMenu: null,
    isMenuActive: false,
    isLoading: false,
    isLoaded: false,
    items: [],
    subItems: [],
    cardSubMenuActive: false,
    error: null,
}

export function menuReducer(state = initState, action) {
    switch (action.type) {
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
        case INIT_SUB_MENU_SUCCESS:
            return {
                ...state,
                subItems: action.payload
            }
        case SET_ID_ACTIVE_MENU:
            return {
                ...state,
                idActiveMenu: action.payload
            }
        case SET_IS_MENU_ACTIVE:
            return {
                ...state,
                isMenuActive: action.payload
            }
        case SHOW_CARD_SUB_MENU:
            return {
                ...state,
                cardSubMenuActive: action.payload
            }
        default:
            return state
    }
}
