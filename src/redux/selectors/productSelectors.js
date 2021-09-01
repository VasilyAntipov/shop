// import { createSelector } from 'reselect'
export const productSelector = (state) => state.product
export const productItemsSelector = (state) => productSelector(state).items
export const productIsLoadedSelector = (state) => productSelector(state).isLoaded
export const productCountSelector = (state) => productSelector(state).countItems
