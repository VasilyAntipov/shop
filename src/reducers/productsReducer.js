import {
    IS_CATALOG,
    INIT_PRODUCTS,
    INIT_PRODUCTS_FAIL,
    INIT_PRODUCTS_SUCCESS,
} from "../constants"

const initState = {
    isCatalog: true,
    isLoading: false,
    isLoaded: false,
    items: [],
    error: null,
}

export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
        case INIT_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: action.payload
            }
        case INIT_PRODUCTS_FAIL:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }
        case IS_CATALOG:
            return {
                ...state,
                isCatalog: action.payload
            }
        default:
            return state
    }
}
