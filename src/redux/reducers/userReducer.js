import {
    AUTH_DIALOG_OPEN,
    IS_ADMIN,
    IS_AUTH,
    INIT_USER,
    INIT_USER_SUCCESS,
    INIT_USER_FAIL,
    USER_LOGOUT
} from "../constants"
import { } from "../constants"

const initState = {
    isLoading: false,
    isLoaded: false,
    userData: {},
    isAuth: false,
    isAdmin: false,
    authDialogOpen: false,

}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case INIT_USER:
            return {
                ...state,
                isLoading: true
            }
        case INIT_USER_SUCCESS: {
            const isAdmin = action.payload.role === 'ADMIN'
                ? true
                : false
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                isAuth: true,
                userData: action.payload,
                isAdmin,
            }
        }

        case INIT_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                isAuth: false,
                isAdmin: false,
                userData: {},
            }
        case USER_LOGOUT:
            return {
                ...state,
                isAuth: false,
                isAdmin: false,
                userData: {},
            }
        case IS_ADMIN:
            return {
                ...state,
                isAdmin: action.payload
            }
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }

        case AUTH_DIALOG_OPEN:
            return {
                ...state,
                authDialogOpen: action.payload
            }

        default:
            return state
    }
}
