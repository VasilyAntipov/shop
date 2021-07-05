import { createSelector } from 'reselect';

export const isMenuLoaded = state => state.menu.isLoaded;
export const menu = state => state.menu;
