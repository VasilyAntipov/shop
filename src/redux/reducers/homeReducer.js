import {
    INIT_TOP_PRODUCTS_SUCCESS,
    INIT_TOP_PRODUCTS_FAIL,
    INIT_TOP_PRODUCTS
} from "../constants"

const initState = {
    isLoading: false,
    isLoaded: false,
    items: [],
    error: null,
}

export const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_TOP_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
        case INIT_TOP_PRODUCTS_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: action.payload,
            }
        }
            case INIT_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }
        
        default:
            return state
    }
}
