import {
    INIT_MENU,
    INIT_MENU_FAIL,
    INIT_MENU_SUCCESS,
    SET_ID_ACTIVE_MENU,
    SET_IS_MENU_ACTIVE,
    SHOW_CARD_SUB_MENU,
    LOAD_CATALOG_TABLE_DATA,
    SET_CATALOG_TABLE_PARENT,
    CHANGE_ONE_CATEGORY,
    ADD_CATEGORY,
    DELETE_CATEGORY
} from '../constants'

const initState = {
    idActiveMenu: null,
    isMenuActive: false,
    isLoading: false,
    isLoaded: false,
    items: [],
    cardSubMenuActive: false,
    admCatalogTableParent: { id: null, name: 'Каталог', parentId: null },
    error: null,
}

export const menuReducer = (state = initState, action) => {
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
        case SET_CATALOG_TABLE_PARENT: {
            if (action.payload)
                return {
                    ...state,
                    admCatalogTableParent: action.payload
                }
            return {
                ...state,
                admCatalogTableParent: initState.admCatalogTableParent
            }
        }
        case CHANGE_ONE_CATEGORY:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    }
                    return item
                })
            }
        case ADD_CATEGORY:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }


        default:
            return state
    }
}
