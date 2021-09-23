import { put, all, takeLatest, select } from 'redux-saga/effects';
import { getProducts, getFilters, } from '../api'
import {
    INIT_MENU, INIT_PRODUCTS, INIT_FILTERS, INIT_USER,
    SET_CATALOG_TABLE_PARENT
} from '../redux/constants';
import {
    initMenuSuccess,
    initMenuFail,
    initProductsFail,
    initProductsSuccess,
    initFiltersSuccess,
    initFiltersFail,
    initOrderGroupListSuccess,
    initUserFail,
    initUserSuccess,
} from '../redux/actions'

import { auth } from '../http/userApi'
import { getCategories } from '../http/categoryApi'
import { getProductsByCatId } from '../http/productApi';

function* initMenu() {
    try {
        const menu = yield getCategories();
        yield put(initMenuSuccess(menu));
    } catch (e) {
        yield put(initMenuFail('COULD NOT GET MENU'));
    }
}

function* setCatalogTableParent(action) {
    try {
        const menu = yield select(state => state.menu)
        const id = menu.admCatalogTableParent.id
        const products = yield getProductsByCatId(id);
        yield put(initProductsSuccess(products));
    } catch (e) {
        yield put(initProductsFail('COULD NOT GET PRODUCTS'));
    }

}

function* initProducts(action) {
    try {
        const products = yield getProducts(action.payload);
        yield put(initProductsSuccess(products));
    } catch (e) {
        yield put(initProductsFail('COULD NOT GET PRODUCTS'));
    }
}

function* initFilters(action) {
    try {
        const { id, search } = action.payload;
        const { filters, orderList, groupList } = yield getFilters(id);
        yield put(initOrderGroupListSuccess({ orderList, groupList }));
        yield put(initFiltersSuccess({ filters, search }));
    } catch (e) {
        yield put(initFiltersFail('COULD NOT GET FILTERS'));
    }
}

function* initUser() {
    try {
        const data = yield auth();
        yield put(initUserSuccess(data));
    } catch (e) {
        yield put(initUserFail());
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(INIT_MENU, initMenu),
        takeLatest(INIT_PRODUCTS, initProducts),
        takeLatest(INIT_FILTERS, initFilters),
        takeLatest(INIT_USER, initUser),
        takeLatest(SET_CATALOG_TABLE_PARENT, setCatalogTableParent)
    ]);
}