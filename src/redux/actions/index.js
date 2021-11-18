import { createAction } from 'redux-actions';
import { urlParse } from '../../utils/func';
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
    INIT_ORDER_GROUP_LIST_SUCCESS,
    AUTH_DIALOG_OPEN,
    IS_AUTH,
    IS_ADMIN,
    INIT_USER,
    INIT_USER_FAIL,
    INIT_USER_SUCCESS,
    LOAD_USER,
    USER_LOGOUT,
    SET_CATALOG_TABLE_PARENT,
    CHANGE_ONE_CATEGORY,
    ADD_CATEGORY,
    DELETE_CATEGORY,
    INIT_REFERENCES,
    INIT_REFERENCES_FAIL,
    INIT_REFERENCES_SUCCESS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_REFERENCE,
    CREATE_REFERENCE,
    DELETE_REFERENCE
} from '../constants'

export const initMenuSuccess = createAction(INIT_MENU_SUCCESS)
export const initMenuFail = createAction(INIT_MENU_FAIL)
export const initMenu = createAction(INIT_MENU)
export const setIdActiveMenu = createAction(SET_ID_ACTIVE_MENU)
export const setIsMenuActive = createAction(SET_IS_MENU_ACTIVE)
export const showCardSubMenu = createAction(SHOW_CARD_SUB_MENU)
export const setCatalogTableParent = createAction(SET_CATALOG_TABLE_PARENT)
export const changeOneCategory = createAction(CHANGE_ONE_CATEGORY)
export const addCategory = createAction(ADD_CATEGORY)
export const deleteCategoryAction = createAction(DELETE_CATEGORY)

export const isProduct = createAction(IS_PRODUCT)
export const initProducts = createAction(INIT_PRODUCTS)
export const initProductsSuccess = createAction(INIT_PRODUCTS_SUCCESS)
export const initProductsFail = createAction(INIT_PRODUCTS_FAIL)
export const addProductAction = createAction(ADD_PRODUCT)
export const updateProductAction = createAction(UPDATE_PRODUCT)
export const deleteProductAction = createAction(DELETE_PRODUCT)


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
export const initOrderGroupListSuccess = createAction(INIT_ORDER_GROUP_LIST_SUCCESS)


export const initUserSuccess = createAction(INIT_USER_SUCCESS)
export const initUserFail = createAction(INIT_USER_FAIL)
export const initUser = createAction(INIT_USER)

export const openAuthDialog = createAction(AUTH_DIALOG_OPEN)
export const setIsAuth = createAction(IS_AUTH)
export const setIsAdmin = createAction(IS_ADMIN)
export const loadUserData = createAction(LOAD_USER)
export const userLogout = createAction(USER_LOGOUT)


export const initReferences = createAction(INIT_REFERENCES)
export const initReferencesFail = createAction(INIT_REFERENCES_FAIL)
export const initReferencesSuccess = createAction(INIT_REFERENCES_SUCCESS)
export const updateReferenceAction = createAction(UPDATE_REFERENCE)
export const createReferenceAction = createAction(CREATE_REFERENCE)
export const deleteReferenceAction  = createAction(DELETE_REFERENCE)