import { $authHost, $host } from "./index";

export const createCategory = async (category) => {
    const { data } = await $authHost.post('api/category', category)
    return data
}

export const getCategories = async () => {
    const { data } = await $host.get('api/category')
    return data
}

export const getGlobalCategories = async () => {
    const { data } = await $host.get('api/category/top')
    return data
}

export const getCategoryById = async () => {
    const { data } = await $host.get('api/category/id')
    return data
}
