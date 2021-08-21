import { API_URL } from "../constants";

export const getMenu = async () => {
    try {
        const response = await fetch(`${API_URL}/category`);
        const menu = await response.json();
        return menu;
    } catch (e) {
        console.log(e);
    }
}

export const getProducts = async (payload) => {
    try {
        const response = await fetch(`${API_URL}/product/all/${payload.id}/${payload.search}`);
        const data = await response.json();
        return data
    } catch (e) {
        console.log(e);
    }
}

export const getFilters = async (id) => {
    try {
        let response = await fetch(`${API_URL}/filter/${id}`)
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}
