import {
    IS_CATALOG,
    INIT_PRODUCTS,
    INIT_PRODUCTS_FAIL,
    INIT_PRODUCTS_SUCCESS,
    ADD_FILTER,
    REMOVE_FILTER,
    CLEAR_FILTERS,
    SHOW_FILTER_FLAG,
} from "../constants"

const initState = {
    isCatalog: true,
    isLoading: false,
    isLoaded: false,
    items: [],
    filters: [
        { type: 'price', data: [] },
        { type: 'producer', data: [] }
    ],
    filterFlag: { visible: false, coordinatsY: null },
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
        case ADD_FILTER:
            return {
                ...state,
                filters: state.filters.map(item => {
                    if (item.type === action.payload.filterType)
                        return {
                            type: action.payload.filterType,
                            data: [
                                ...item.data,
                                {
                                    id: action.payload.id,
                                    value: action.payload.value
                                }
                            ]
                        }
                    else return item
                })
            }
        case REMOVE_FILTER:
            return {
                ...state,
                filters: state.filters.map(item => {
                    if (item.type === action.payload.filterType)
                        return {
                            type: action.payload.filterType,
                            data: item.data.filter(item => item.id !== action.payload.id)
                        }
                    else return item
                })
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                filters: [
                    { type: 'price', data: [] },
                    { type: 'producer', data: [] }
                ],
            }
        case SHOW_FILTER_FLAG:
            return {
                ...state,
                filterFlag: { 
                    visible: action.payload.visible, 
                    coordinatsY: action.payload.coordinatsY 
                }
            }
        default:
            return state
    }
}
