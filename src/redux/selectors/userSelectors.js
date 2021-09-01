// import { createSelector } from 'reselect'

export const userSelector = (state) => state.user
export const isAuthSelector = (state) => userSelector(state).isAuth
export const isAdminSelector = (state) => userSelector(state).isAdmin
export const authDialogOpenSelector = (state) => userSelector(state).authDialogOpen
export const userIsLoadedSelector = (state) => userSelector(state).isLoaded
export const userDataSelector = (state) => userSelector(state).userData