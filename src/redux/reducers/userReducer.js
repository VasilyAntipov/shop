import { AUTH_DIALOG_OPEN } from "../constants"
import { } from "../constants"

const initState = {
    isAuth: false,
    isAdmin : false,
    authDialogOpen: false,
    user: {},
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_DIALOG_OPEN: 
            return {
                ...state,
                authDialogOpen: action.payload
            }
        default:
            return state
    }
}
