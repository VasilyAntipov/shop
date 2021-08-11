export const urlParse = (url) => {
    try {
        if (url === '')
            return []
        const res = [];
        url.slice(1).split('&').forEach(item => {
            const el = item.split('=')
            res.push({ type: el[0], arrayOfChecked: el[1].split(',').map(item=>parseInt(item))})
        })
        return res;
    }
    catch (e) {
        console.log('некорректный url')
        return [];
    }
}
