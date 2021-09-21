import {$authHost, $host} from "./index";

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async () => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

export const fetchProductCountsGroupCategory = async () => {
    const {counts} = await $authHost.get('api/product/couns')
    return counts
}