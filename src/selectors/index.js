export const menuHaveChild = (state, id) => state.items.some(item => item.parent_id === id);
export const getItems = (state) => state.items.filter(item => item.parent_id === null)
export const getSubItems = (state) => state.items.filter(item => item.parent_id !== null)
export const getItem = (state, id) => state.items.filter(item => item.id === id)

export const getNavItems = (state, parentId) => {
    let id = Number(parentId)
    const arr = [];
    while (id !== null) {
        let findItem = state.items.find(item => item.id === id)
        arr.push(findItem)
        id = findItem.parent_id;
    };
    return arr.reverse();
}

export const getUniqueProducers = (state) => {
    const uniques = new Set();
    state.items.map(item => uniques.add({ id: item.id, name: item.prodname }));
    return [...uniques]
}

export const getUniqueByFieldName = (array, fieldName) =>
    [...new Set(array.map((item) => item[fieldName]))];

export const getFiltersString = (state) => {
    const res = [];
    state.filters.map(item => {
        const valueArr = [];
        if (item.data.length > 0) {
            item.data.map(item => valueArr.push(item.value))
        }
        if (valueArr.length > 0) res.push(`${item.type}=${valueArr.join(',')}`)
    })
    return res.join('&')

}