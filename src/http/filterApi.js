import {$host} from "./index";

export const getFilters = async (id) => {
    const {data} = await $host.get('api/filter/' + id)
    return data
}
