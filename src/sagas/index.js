import { put, all, takeLatest } from 'redux-saga/effects';
import { getMenu, getSubMenu, getProducts } from '../api'
import { INIT_MENU, INIT_PRODUCTS } from '../constants';
import {
    initMenuSuccess, initMenuFail, initSubMenuSuccess,
    initProductsFail, initProductsSuccess,
} from '../actions'

function* initMenu() {
    try {
        const menu = yield getMenu();
        yield put(initMenuSuccess(menu));
        const subMenu = yield getSubMenu();
        yield put(initSubMenuSuccess(subMenu));
    } catch (e) {
        yield put(initMenuFail('COULD NOT GET MENU'));
    }
}

function* initProducts(props) {
    try {
        const products = yield getProducts(props.payload);
        yield put(initProductsSuccess(products));
    } catch (e) {
        yield put(initProductsFail('COULD NOT GET PRODUCTS'));
    }
}


export function* rootSaga() {
    yield all([
        takeLatest(INIT_MENU, initMenu),
        takeLatest(INIT_PRODUCTS, initProducts),
    ]);
}