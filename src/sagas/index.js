import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
    INIT_MENU, INIT_PRODUCTS, INIT_FILTERS, INIT_USER,
    SET_CATALOG_TABLE_PARENT,
    INIT_REFERENCES
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
    initReferencesFail,
    initReferencesSuccess
} from '../redux/actions'

import { auth } from '../http/userApi'
import { getCategories } from '../http/categoryApi'
import { getProductsByCatId } from '../http/productApi';
import { fetchBrands, fetchCountries } from '../http/referenceApi';
import {getFilters} from '../http/filterApi'
function* initMenu() {
    try {
        const menu = yield getCategories();
        yield put(initMenuSuccess(menu));
    } catch (e) {
        yield put(initMenuFail('COULD NOT GET MENU'));
    }
}

function* setCatalogTableParent() {
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
        const products = yield getProductsByCatId(Number(action.payload));
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

function* initReferences() {
    try {
        const brands = yield fetchBrands();
        const countries = yield fetchCountries();
        yield put(initReferencesSuccess({ brands, countries }));
    } catch (e) {
        yield put(initReferencesFail('COULD NOT GET MENU'));
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(INIT_MENU, initMenu),
        takeLatest(INIT_PRODUCTS, initProducts),
        takeLatest(INIT_FILTERS, initFilters),
        takeLatest(INIT_USER, initUser),
        takeLatest(SET_CATALOG_TABLE_PARENT, setCatalogTableParent),
        takeLatest(INIT_REFERENCES, initReferences)
    ]);
}