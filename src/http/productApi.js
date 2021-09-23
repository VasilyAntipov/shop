import {$authHost, $host} from "./index";

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const getProductsByCatId = async (catId) => {
    const {data} = await $host.get('api/product/all/' + catId)
    return data
}

export const getOneProduct = async (id) => {
    const {data} = await $host.get('api/product/one/' + id)
    return data
}
