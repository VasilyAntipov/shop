import { SERVER, API } from "../constants";
export const getMenu = async () => {
    try {
        const response = await fetch(`${SERVER}${API}menu`);
        const menu = await response.json();
        return menu;
    } catch (e) {
        console.log(e);
    }
}

export const getSubMenu = async () => {
    try {
        const response = await fetch(`${SERVER}${API}submenu`);
        const subMenu = await response.json();
        return subMenu;
    } catch (e) {
        console.log(e);
    }
}

export const getProducts = async (payload) => {
    try {
        const response = await fetch(`${SERVER}${API}products/${payload.id}/${payload.search}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const getFilters = async (id) => {
    try {
        let response = await fetch(`${SERVER}${API}filters/${id}`)
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

