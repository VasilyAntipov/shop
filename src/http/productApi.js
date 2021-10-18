import { $authHost, $host } from "./index";

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const updateProduct = async (product) => {
    const { data } = await $authHost.put('api/product', product)
    return data
}

export const deleteProduct = async (id) => {
    const { data } = await $authHost.delete(`api/product/${id}`)
    return data
}

export const getProductsByCatId = async ({ id, search }) => {
    const query = search || ''
    const { data } = await $host.get('api/product/all/' + id + query)
    return data
}

export const getOneProduct = async (id) => {
    const { data } = await $host.get('api/product/one/' + id)
    return data
}
