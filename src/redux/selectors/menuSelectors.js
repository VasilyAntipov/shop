import { createSelector } from 'reselect'
export const menuSelector = (state) => state.menu
export const idActiveMenuSelector = createSelector(menuSelector, menu => menu.idActiveMenu)
export const isMenuActiveSelector = createSelector(menuSelector, menu => menu.isMenuActive)
export const menuIsLoadedSelector = createSelector(menuSelector, menu => menu.isLoaded)
export const menuItemsSelector = createSelector(menuSelector, menu => menu.items)
export const cardSubMenuActiveSelector = createSelector(menuSelector, menu => menu.cardSubMenuActive)
export const selectMenuId = (_, id) => id
export const admCatalogTableParentSelector = createSelector(menuSelector, menu => menu.admCatalogTableParent)
export const mainMenuItemsSelector =
    createSelector([menuItemsSelector], (items) => items.filter(item => item.parentId === 0))
export const subMenuItemsSelector =
    createSelector([menuItemsSelector], (items) => items.filter(item => item.parentId !== 0))
    
export const menuHaveChildSelector =
    (state) => (id) => menuItemsSelector(state).some(item => item.parentId === id);

export const getMenuItemByIdSelector =
    (state) => (id) => menuItemsSelector(state).find(item => item.id === id);

export const getMenuItemsByParentIdSelector = createSelector(
    [admCatalogTableParentSelector, menuItemsSelector],
    (parent, items) => items.filter(item => item.parentId === parent.id))

// export const getMenuItemsByParentIdSelector = (state =>
//    menuItemsSelector(state)
//    .filter(item => item.parentId ===  admCatalogTableParentSelector(state).id))

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
