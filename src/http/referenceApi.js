
import { $authHost, $host } from "./index";

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand',)
    return data
}

export const updateBrand = async (brand) => {
    const { data } = await $authHost.put('api/brand', brand)
    return data
}

export const deleteBrand = async (id) => {
    const { data } = await $authHost.delete(`api/brand/${id}`)
    return data
}

export const createCountry = async (brand) => {
    const { data } = await $authHost.post('api/country', brand)
    return data
}

export const fetchCountries = async () => {
    const { data } = await $host.get('api/country',)
    return data
}

export const updateCountry = async (country) => {
    const { data } = await $authHost.put('api/country', country)
    return data
}

export const deleteCountry = async (id) => {
    const { data } = await $authHost.delete(`api/country/${id}`)
    return data
}