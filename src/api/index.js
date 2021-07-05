export const getCatalog = async () => {
    try {
        let response = await fetch('http://localhost:3001/api/catalog');
        let catalog = await response.json();
        return catalog;
    } catch (e) {
        alert(e);
    }
}
