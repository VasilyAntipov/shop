import { createSelector } from 'reselect';

export const getMenu = state => state.menu;

export const getItems = state => state.menu.items;
export const subItems = state => state.menu.subItems;
export const menuHaveChild = (menu, id) => menu.subItems.some(item => item.parent_id === id);
