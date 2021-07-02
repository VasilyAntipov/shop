import { createAction } from 'redux-actions';
import {
    CHANGE_DISPLAY_SUBMENU,
    INIT_CATALOG_SUCCESS,
    INIT_CATALOG_FAIL,
    INIT_CATALOG,
    SET_ACTIVE_ID
} from '../constants/actionTypes'


export const changeDisplaySubmenu = createAction(CHANGE_DISPLAY_SUBMENU)
export const initCatalogSuccess = createAction(INIT_CATALOG_SUCCESS)
export const initCatalogFail = createAction(INIT_CATALOG_FAIL)
export const initCatalog = createAction(INIT_CATALOG)
export const setActiveId = createAction(SET_ACTIVE_ID)
