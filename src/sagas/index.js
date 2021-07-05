import { put, all, takeLatest } from 'redux-saga/effects';
import { getMenu , getSubMenu} from '../api'
import { INIT_MENU,INIT_SUB_MENU} from '../constants';
import { initMenuSuccess, initMenuFail, initSubMenuSuccess, initSubMenuFail } from '../actions'

function* initMenu() {
    try {
        const menu = yield getMenu();
        yield put(initMenuSuccess(menu));
    } catch (e) {
        yield put(initMenuFail('COULD NOT GET MENU'));
    }
}

function* initSubMenu() {
    try {
        const subMenu = yield getSubMenu();
        yield put(initSubMenuSuccess(subMenu));
    } catch (e) {
        yield put(initSubMenuFail('COULD NOT GET SUBMENU'));
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(INIT_MENU, initMenu),
        takeLatest(INIT_SUB_MENU, initSubMenu),
    ]);
}