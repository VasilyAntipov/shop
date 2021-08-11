import { put, all, takeLatest } from 'redux-saga/effects';
import { getMenu, getProducts, getFilters } from '../api'
import { INIT_MENU, INIT_PRODUCTS, INIT_FILTERS } from '../constants';
import {
    initMenuSuccess,
    initMenuFail,
    initProductsFail,
    initProductsSuccess,
    initFiltersSuccess,
    initFiltersFail,
} from '../actions'

function* initMenu() {
    try {
        const menu = yield getMenu();
        yield put(initMenuSuccess(menu));
    } catch (e) {
        yield put(initMenuFail('COULD NOT GET MENU'));
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
        const filters = yield getFilters(id);
        yield put(initFiltersSuccess({ filters, search }));
    } catch (e) {
        yield put(initFiltersFail('COULD NOT GET FILTERS'));
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(INIT_MENU, initMenu),
        takeLatest(INIT_PRODUCTS, initProducts),
        takeLatest(INIT_FILTERS, initFilters),
    ]);
}