import { createSelector } from 'reselect';

export const isMenuLoaded = state => state.menu.isLoaded;
export const listMenu = state => state.menu.items;
