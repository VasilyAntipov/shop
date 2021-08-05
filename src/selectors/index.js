export const menuHaveChild = (state, id) => state.items.some(item => item.parent_id === id);
export const getItems = (state) => state.items.filter(item => item.parent_id === null)
export const getSubItems = (state) => state.items.filter(item => item.parent_id !== null)
export const getItem = (state, id) => state.items.filter(item => item.id === id)

export const getNavItems = (state, childId) => {
    const getItemById = (id) => state.items.find(item => item.id === id);
    let current = getItemById(Number(childId));
    const res = [];
    while (current) {
        res.unshift(current);
        current = getItemById(current.parent_id);
    }
    return res;
}

export const getFiltersToString = (state) => {
    const res = [];
    state.items.forEach(item => {
        const dataArray = [];
        item.data.forEach(dataItem => {
            if (dataItem.checked) {
                dataArray.push(dataItem.id)
            }
        })
        if (dataArray.length > 0)
            res.push(`${item.type}=${dataArray.join(',')}`)
    })
    if (res.length > 0)
        return '?' + res.join('&');
    return ''
}
