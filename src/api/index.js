import { SERVER, API } from "../constants";
export const getMenu = async () => {
    try {
        let response = await fetch(`${SERVER}${API}menu`);
        let menu = await response.json();
        return menu;
    } catch (e) {
        alert(e);
    }
}

export const getSubMenu = async () => {
    try {
        let response = await fetch(`${SERVER}${API}submenu`);
        let subMenu = await response.json();
        return subMenu;
    } catch (e) {
        alert(e);
    }
}

export const getProducts = async (id) => {
    try {
        let response = await fetch(`${SERVER}${API}products/${id}`);
        let menu = await response.json();
        return menu;
    } catch (e) {
        alert(e);
    }
}
