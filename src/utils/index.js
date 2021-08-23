export const urlParse = (url) => {
    try {
        if (url === '')
            return []
        const res = [];
        url.slice(1).split('&').forEach(item => {
            const el = item.split('=')
            res.push({ type: el[0], arrayOfChecked: el[1].split(',').map(item => parseInt(item)) })
        })
        return res;
    }
    catch (e) {
        console.log('некорректный url')
        return [];
    }
}

export const addSearchToUrl = (location, search, element) => {
    try {
        let resultArray = []
        const searchArray = location.search
            ? location.search.replace('?', '').split('&')
            : []
        searchArray.forEach(item => {
            resultArray.push({ type: item.split('=')[0], data: item.split('=')[1] })
        })
        if (element === 'filters') {
            resultArray = resultArray
                .filter(item => item.type !== 'brandId' && item.type !== 'countryId')
            search.forEach(item => {
                resultArray.push(item)
            })
        }
        else {
            resultArray = resultArray.filter(item => item.type !== element)
            resultArray.push(search)
        }


        resultArray = resultArray.map(item => {
            return `${item.type}=${item.data}`
        })

        return `?${resultArray.join('&')}`

    } catch (e) {
        console.log('несоответствующий формат строки запроса')
        return ''
    }

}