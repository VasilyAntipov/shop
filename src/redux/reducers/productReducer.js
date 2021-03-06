import {
    IS_PRODUCT,
    INIT_PRODUCTS,
    INIT_PRODUCTS_FAIL,
    INIT_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_RATING,
    INIT_PRODUCTS_SUCCESS_ONE
} from "../constants"

const initState = {
    isProduct: true,
    isLoading: false,
    isLoaded: false,
    oneIdsLoaded: [],
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
                countItems: action.payload.count,
                oneIdsLoaded: []
            }
        case INIT_PRODUCTS_SUCCESS_ONE: {
            const { rows, count } = action.payload
            const oneElement = rows[0]
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: (state.items.length === 0)
                    ? rows
                    : state.items.find(item => item.id === oneElement.id)
                        ? state.items
                        : [...state.items, oneElement],
                countItems: state.countItems ? state.countItems + 1 : count,
                oneIdsLoaded: [...state.oneIdsLoaded, oneElement.id]
            }
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
        case UPDATE_RATING:
            {
                return {
                    ...state,
                    items: state.items.map(item => {
                        if (item.id === action.payload.id) {
                            return {
                                ...item,
                                avgRating: action.payload.avgRating,
                                countRating: action.payload.countRating
                            }
                        }
                        return item
                    })
                }
            }

        default:
            return state
    }
}
