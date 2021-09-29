import {
    INIT_REFERENCES,
    INIT_REFERENCES_FAIL,
    INIT_REFERENCES_SUCCESS
} from "../constants"

const initState = {
    isLoading: false,
    isLoaded: false,
    items: {},
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
        default:
            return state
    }
}
