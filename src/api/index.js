import { db } from "./db";
export const getMenu = async () => {
    try {
        let response = await fetch(`${db}/menu`);
        let menu = await response.json();
        return menu;
    } catch (e) {
        alert(e);
    }
}

export const getSubMenu = async () => {
    try {
        let response = await fetch(`${db}/submenu`);
        let subMenu = await response.json();
        return subMenu;
    } catch (e) {
        alert(e);
    }
}

export const getProducts = async (id) => {
    try {
        let response = await fetch(`${db}/products/${id}`);
        let menu = await response.json();
        return menu;
    } catch (e) {
        alert(e);
    }
}
