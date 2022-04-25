import { $authHost, $host } from "./index";

export const getTopProducts = async () => {
    const { data } = await $host.get('api/product/top/')
    return data
}