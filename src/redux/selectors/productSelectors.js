import { createSelector } from 'reselect'
export const productSelector = (state) => state.product
export const productItemsSelector = createSelector(productSelector, product => product.items)
export const productIsLoadedSelector = createSelector(productSelector, product => product.isLoaded)
export const productIsLoadingSelector = createSelector(productSelector, product => product.isLoading)
export const productCountSelector = createSelector(productSelector, product => product.countItems)
