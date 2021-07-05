import { put, all, takeLatest } from 'redux-saga/effects';
import { getMenu } from '../api'
import { INIT_MENU } from '../constants';
import { initMenuSuccess, initMenuFail } from '../actions'

function* initMenu() {
    try {
        const menu = yield getMenu();
        yield put(initMenuSuccess(menu));
    } catch (e) {
        yield put(initMenuFail('COULD NOT GET MENU'));
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(INIT_MENU, initMenu),
    ]);
}