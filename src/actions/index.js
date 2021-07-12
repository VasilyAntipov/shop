import { createAction } from 'redux-actions';
import {
    INIT_MENU_SUCCESS,
    INIT_MENU_FAIL,
    INIT_MENU,
    INIT_SUB_MENU_SUCCESS,
    INIT_SUB_MENU_FAIL,
    INIT_SUB_MENU,
    SET_ID_ACTIVE_MENU,
    SET_IS_MENU_ACTIVE,
    SHOW_CARD_SUB_MENU,
    IS_CATALOG,
    INIT_PRODUCTS,
    INIT_PRODUCTS_FAIL,
    INIT_PRODUCTS_SUCCESS,
} from '../constants'


export const initMenuSuccess = createAction(INIT_MENU_SUCCESS)
export const initMenuFail = createAction(INIT_MENU_FAIL)
export const initMenu = createAction(INIT_MENU)
export const initSubMenuSuccess = createAction(INIT_SUB_MENU_SUCCESS)
export const initSubMenuFail = createAction(INIT_SUB_MENU_FAIL)
export const initSubMenu = createAction(INIT_SUB_MENU)
export const setIdActiveMenu = createAction(SET_ID_ACTIVE_MENU)
export const setIsMenuActive = createAction(SET_IS_MENU_ACTIVE)
export const showCardSubMenu = createAction(SHOW_CARD_SUB_MENU)
export const isCatalog = createAction(IS_CATALOG)
export const initProducts = createAction(INIT_PRODUCTS)
export const initProductsSuccess = createAction(INIT_PRODUCTS_SUCCESS)
export const initProductsFail = createAction(INIT_PRODUCTS_FAIL)