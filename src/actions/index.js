import { createAction } from 'redux-actions';
import { urlParse } from '../utils';
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
    CHANGE_FILTER_MARK,
    CLEAR_FILTERS_ALL,
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
export const initFiltersSuccess = createAction(INIT_FILTERS_SUCCESS, (payload) => {

    const { filters, search } = payload;
    let filtersChecked = urlParse(search);
    try {
        return filters.map((item) => {
            let dataSrc;
            const checked = filtersChecked.find(checkItem => item.type === checkItem.type)
            if (checked) {
                dataSrc = item.data.map(dataItem => ({
                    ...dataItem,
                    checked: checked.arrayOfChecked.includes(dataItem.id)
                }))
            }
            else
                dataSrc = item.data.map((dataItem) => {
                    return { ...dataItem, checked: false }
                })
            return (
                {
                    ...item,
                    data: dataSrc
                }
            )
        })
    }
    catch (e) {
        return filters.map((item) => (
            {
                ...item,
                data: item.data.map((item) => ({
                    ...item,
                    checked: false
                }))
            }
        ))
    }
})

export const initFiltersFail = createAction(INIT_FILTERS_FAIL)
export const showFilterFlag = createAction(SHOW_FILTER_FLAG)
export const changeFilterMark = createAction(CHANGE_FILTER_MARK)
export const clearFilters = createAction(CLEAR_FILTERS)
export const clearFiltersAll = createAction(CLEAR_FILTERS_ALL)  