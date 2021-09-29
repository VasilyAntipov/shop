import { createSelector } from 'reselect'
export const referenceSelector = (state) => state.reference
export const referenceIsLoadedSelector = createSelector(referenceSelector, ref => ref.isLoaded)
export const referenceIsLoadingSelector = createSelector(referenceSelector, ref => ref.isLoading)
export const referenceItemsSelector = createSelector(referenceSelector, ref => ref.items)
export const brandsSelector = createSelector(referenceItemsSelector, items => items.brands)
export const countriesSelector = createSelector(referenceItemsSelector, items => items.countries)