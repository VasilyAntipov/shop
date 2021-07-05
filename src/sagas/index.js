import { put, all, takeLatest } from 'redux-saga/effects';
import { getCatalog } from '../api'
import { INIT_CATALOG } from '../constants';
import { initCatalogSuccess, initCatalogFail } from '../actions'

function* initCatalog() {
    try {
        const catalog = yield getCatalog();
        yield put(initCatalogSuccess(catalog));
    } catch (e) {
        yield put(initCatalogFail('COULD NOT GET CATALOG'));
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(INIT_CATALOG, initCatalog),
    ]);
}