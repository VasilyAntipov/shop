import { createAction } from 'redux-actions';
import {
    CHANGE_DISPLAY_SUBMENU,
    INIT_CATALOG_SUCCESS,
    INIT_CATALOG_FAIL,
    INIT_CATALOG,
    INIT_MENU_SUCCESS,
    INIT_MENU_FAIL,
    INIT_MENU,
    SET_ACTIVE_ID
} from '../constants'


export const changeDisplaySubmenu = createAction(CHANGE_DISPLAY_SUBMENU)
export const initCatalogSuccess = createAction(INIT_CATALOG_SUCCESS)
export const initCatalogFail = createAction(INIT_CATALOG_FAIL)
export const initCatalog = createAction(INIT_CATALOG)
export const initMenuSuccess = createAction(INIT_MENU_SUCCESS)
export const initMenuFail = createAction(INIT_MENU_FAIL)
export const initMenu = createAction(INIT_MENU)
export const setActiveId = createAction(SET_ACTIVE_ID)
