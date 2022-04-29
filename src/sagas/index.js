import { put, all, takeLatest, select } from 'redux-saga/effects';
import {
    INIT_MENU, INIT_PRODUCTS, INIT_FILTERS, INIT_USER,
    SET_CATALOG_TABLE_PARENT,
    INIT_REFERENCES,
    INIT_TOP_PRODUCTS,
    INIT_PRODUCTS_ONE
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
    initReferencesSuccess,
    initTopProductsFail,
    initTopProductsSuccess,
    initProductsSuccessOne
} from '../redux/actions'

import { auth } from '../http/userApi'
import { getCategories } from '../http/categoryApi'
import { getProductsByCatId, getOneProduct } from '../http/productApi';
import { fetchBrands, fetchCountries } from '../http/referenceApi';
import { getFilters } from '../http/filterApi'
import { getTopProducts } from '../http/homeApi'

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
        const products = yield getProductsByCatId({ id });
        yield put(initProductsSuccess(products));
    } catch (e) {
        yield put(initProductsFail('COULD NOT GET PRODUCTS'));
    }

}

function* initProducts(action) {
    try {
        const products = yield getProductsByCatId(action.payload);
        yield put(initProductsSuccess(products));
    } catch (e) {
        yield put(initProductsFail('COULD NOT GET PRODUCTS'));
    }
}

function* initProductsOne(action) {
    try {
        const product = yield getOneProduct(action.payload.id);
        yield put(initProductsSuccessOne(product));
    } catch (e) {
        yield put(initProductsFail('COULD NOT GET PRODUCTS'));
    }
}

function* initTopProducts() {
    try {
        const topProducts = yield getTopProducts();
        yield put(initTopProductsSuccess(topProducts));
    } catch (e) {
        yield put(initTopProductsFail('COULD NOT GET TOP'));
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
        yield put(initReferencesFail('COULD NOT GET REFERENCES'));
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(INIT_MENU, initMenu),
        takeLatest(INIT_PRODUCTS, initProducts),
        takeLatest(INIT_FILTERS, initFilters),
        takeLatest(INIT_USER, initUser),
        takeLatest(SET_CATALOG_TABLE_PARENT, setCatalogTableParent),
        takeLatest(INIT_REFERENCES, initReferences),
        takeLatest(INIT_TOP_PRODUCTS, initTopProducts),
        takeLatest(INIT_PRODUCTS_ONE, initProductsOne)
    ]);
}