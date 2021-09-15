import { $authHost, $host } from "./index";

export const createCategory = async (category) => {
    const { data } = await $authHost.post('api/category', category)
    return data
}

export const updateCategory = async (category) => {
    const { data } = await $authHost.put('api/category', category)
    return data
}

export const getCategories = async () => {
    const { data } = await $host.get('api/category')
    return data
}

export const deleteCategory = async (id) => {
    const { data } = await $authHost.delete(`api/category/${id}`)
    return data
}
