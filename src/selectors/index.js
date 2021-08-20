import { createSelector } from 'reselect'
// import { memoize } from 'lodash'

export const menuSelector = (state) => state.menu
export const idActiveMenuSelector = (state) => menuSelector(state).idActiveMenu
export const isMenuActiveSelector = (state) => menuSelector(state).isMenuActive
export const menuIsLoadedSelector = (state) => menuSelector(state).isLoaded
export const menuItemsSelector = (state) => menuSelector(state).items
export const cardSubMenuActiveSelector = (state) => menuSelector(state).cardSubMenuActive
export const selectMenuId = (_, id) => id
export const mainMenuItemsSelector =
    createSelector([menuItemsSelector], (items) => items.filter(item => item.parentId === null))
export const subMenuItemsSelector =
    createSelector([menuItemsSelector], (items) => items.filter(item => item.parentId !== null))
export const menuHaveChildSelector =
    (state) => (id) => menuItemsSelector(state).some(item => item.parentId === id);
export const navItemsSelector =
    (state) => (childId) => {
        const getItemById = (id) => menuItemsSelector(state).find(item => item.id === id);
        let current = getItemById(Number(childId));
        const res = [];
        while (current) {
            res.unshift(current);
            current = getItemById(current.parentId);
        }
        return res;
    }



export const filterSelector = (state) => state.filter
export const filterItemsSelector = (state) => filterSelector(state).items
export const filterIsLoadedSelector = (state) => filterSelector(state).isLoaded
export const filterApplyButtonSelector = (state) => filterSelector(state).applyButton
export const setFilterToURI = createSelector(filterItemsSelector,
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
                res.push(`${item.type}=${dataArray.join(',')}`)
        })
        if (res.length > 0)
            return '?' + res.join('&');
        return ''
    })

export const productSelector = (state) => state.product
export const productItemsSelector = (state) => productSelector(state).items
export const productIsLoadedSelector = (state) => productSelector(state).isLoaded

