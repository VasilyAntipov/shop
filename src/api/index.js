import { db } from "./db";
export const getMenu = async () => {
    try {
        let response = await fetch(`${db}/catalog`);
        let menu = await response.json();
        return menu;
    } catch (e) {
        alert(e);
    }
}
