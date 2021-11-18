import {
    INIT_REFERENCES,
    INIT_REFERENCES_FAIL,
    INIT_REFERENCES_SUCCESS,
    UPDATE_REFERENCE,
    CREATE_REFERENCE,
    DELETE_REFERENCE
} from "../constants"

const initState = {
    isLoading: false,
    isLoaded: false,
    items: {
        brands: [],
        countries: []
    },
    error: null,
}

export const referenceReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_REFERENCES:
            return {
                ...state,
                isLoading: true
            }
        case INIT_REFERENCES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                items: action.payload
            }
        case INIT_REFERENCES_FAIL:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }
        case UPDATE_REFERENCE:
            {
                const { refName, data } = action.payload
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [refName]: state.items[refName].map(item => {
                            if (item.id === data.id) {
                                return data
                            }
                            return item
                        })
                    }
                }
            }

        case CREATE_REFERENCE:
            {
                const { refName, data } = action.payload
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [refName]: [...state.items[refName], data]
                    }
                }
            }

        case DELETE_REFERENCE: {
            const { refName, id } = action.payload
            return {
                ...state,
                items: {
                    ...state.items,
                    [refName]: state.items[refName].filter(item => item.id !== +id)
                }
            }
        }
        default:
            return state
    }
}
