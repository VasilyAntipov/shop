import { createSelector } from 'reselect'
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

export const getMenuItemByIdSelector =
    (state) => (id) => menuItemsSelector(state).find(item => item.id === id);
export const getMenuItemsByParentIdSelector =
    (state) => (id) => menuItemsSelector(state).filter(item => item.parentId === id);

export const navItemsSelector =
    (state) => (childId) => {
        const getMenuById = getMenuItemByIdSelector(state)
        let current = getMenuById(Number(childId));
        const res = [];
        while (current) {
            res.unshift(current);
            current = getMenuById(current.parentId);
        }
        return res;
    }
export const admCatalogTableDataSelector = (state) => menuSelector(state).admCatalogTableData