import { createSelector } from 'reselect';

export const menuHaveChild = (menu, id) => menu.items.some(item => item.parent_id === id);
export const getItems = (menu) => menu.items.filter(item => item.parent_id === null)
export const getSubItems = (menu) => menu.items.filter(item => item.parent_id !== null)
export const getItem = (menu, id) => menu.items.filter(item => item.id === id)

export const getNavItems = (menu, parentId) => {
    let id = Number(parentId)
    let arr = [];
    while (id !== null) {
        let findItem = menu.items.find(item => item.id === id)
        arr.push(findItem)
        id = findItem.parent_id;
    };
    return arr.reverse();
}