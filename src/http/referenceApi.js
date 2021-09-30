
import { $authHost, $host } from "./index";

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand',)
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