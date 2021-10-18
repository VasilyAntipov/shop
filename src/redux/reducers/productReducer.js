import {
    IS_PRODUCT,
    INIT_PRODUCTS,
    INIT_PRODUCTS_FAIL,
    INIT_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from "../constants"

const initState = {
    isProduct: true,
    isLoading: false,
    isLoaded: false,
    items: [],
    countItems: null,
    queryUrl: '',
    error: null,
}

export const productReducer = (state = initState, action) => {
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
                items: action.payload.rows,
                countItems: action.payload.count
            }
        case INIT_PRODUCTS_FAIL:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }
        case IS_PRODUCT:
            return {
                ...state,
                isProduct: action.payload
            }

        case ADD_PRODUCT:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    }
                    return item
                })
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}
