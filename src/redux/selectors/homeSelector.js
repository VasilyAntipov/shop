import { createSelector } from 'reselect'
export const homeSelector = (state) => state.home
export const homeItemsSelector = createSelector(homeSelector, home => home.items)
export const homeIsLoadedSelector = createSelector(homeSelector, home => home.isLoaded)
export const homeIsLoadingSelector = createSelector(homeSelector, home => home.isLoading)
