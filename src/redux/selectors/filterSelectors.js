import { createSelector } from 'reselect'
export const filterSelector = (state) => state.filter
export const filterItemsSelector = (state) => filterSelector(state).items
export const filterIsLoadedSelector = (state) => filterSelector(state).isLoaded
export const filterApplyButtonSelector = (state) => filterSelector(state).applyButton
export const orderListSelector = (state) => filterSelector(state).orderList
export const groupListSelector = (state) => filterSelector(state).groupList
export const queryUrlSelector = (state) => filterSelector(state).queryUrl

export const filtersToArraySelector = createSelector(filterItemsSelector,
    items => {
        const res = [];
        items.forEach(item => {
            const dataArray = [];
            item.data.forEach(dataItem => {
                if (dataItem.checked) {
                    dataArray.push(dataItem.id)
                }
            })
            if (dataArray.length > 0)
                res.push({ type: item.type, data: dataArray.join(',') })
        })
        return res
    })