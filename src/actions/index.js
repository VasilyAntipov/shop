import { createAction } from 'redux-actions';
import {
    INIT_MENU_SUCCESS,
    INIT_MENU_FAIL,
    INIT_MENU,
    SET_ID_ACTIVE_MENU,
    SET_IS_MENU_ACTIVE,
    SHOW_CARD_SUB_MENU,
    IS_PRODUCT,
    INIT_PRODUCTS,
    INIT_PRODUCTS_FAIL,
    INIT_PRODUCTS_SUCCESS,
    CLEAR_FILTERS,
    SHOW_FILTER_FLAG,
    INIT_FILTERS,
    INIT_FILTERS_SUCCESS,
    INIT_FILTERS_FAIL,
    CHECK_FILTER,
    UNCHECK_FILTER,
} from '../constants'

export const initMenuSuccess = createAction(INIT_MENU_SUCCESS)
export const initMenuFail = createAction(INIT_MENU_FAIL)
export const initMenu = createAction(INIT_MENU)
export const setIdActiveMenu = createAction(SET_ID_ACTIVE_MENU)
export const setIsMenuActive = createAction(SET_IS_MENU_ACTIVE)
export const showCardSubMenu = createAction(SHOW_CARD_SUB_MENU)

export const isProduct = createAction(IS_PRODUCT)
export const initProducts = createAction(INIT_PRODUCTS)
export const initProductsSuccess = createAction(INIT_PRODUCTS_SUCCESS)
export const initProductsFail = createAction(INIT_PRODUCTS_FAIL)

export const initFilters = createAction(INIT_FILTERS)
export const initFiltersSuccess = createAction(INIT_FILTERS_SUCCESS)
export const initFiltersFail = createAction(INIT_FILTERS_FAIL)
export const showFilterFlag = createAction(SHOW_FILTER_FLAG)
export const checkFilter = createAction(CHECK_FILTER)
export const unCheckFilter = createAction(UNCHECK_FILTER)
export const clearFilters = createAction(CLEAR_FILTERS)
