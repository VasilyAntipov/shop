import { CHANGE_DISPLAY_SUBMENU} from '../constants/actionTypes'


export function changeDisplaySubMenuAction(value) {
    return {
        type: CHANGE_DISPLAY_SUBMENU,
        payload: value,
    }
}

