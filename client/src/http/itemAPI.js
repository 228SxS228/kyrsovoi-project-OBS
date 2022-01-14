import { $authHost, $host } from "./index";

export const createType = async (type) =>{
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async (type) =>{
    const {data} = await $host.get('api/type');
    return data;
}

export const createBrand = async (brand) =>{
    const {data} = await $authHost.post('api/brand', brand);
    return data;
}

export const fetchBrands = async (brand) =>{
    const {data} = await $host.get('api/brand');
    return data;
}

export const createItem = async (item) =>{
    const {data} = await $authHost.post('api/item', item);
    return data;
}


export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/item', {params: {
            typeId, brandId, page, limit
        }})
    return data;
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/item/' + id)
    return data;
}



export const addToBasket = async (userId, itemId) => {
    const { data } = await $host.post('api/shopingcart/', { userId, itemId })
    return data;
}

export const removeFromBasket = async (id) => {
    const { data } = await $host.delete('api/shopingcart/', { params: {
        id
    }})
    return data;
}

export const fetchBasketItems = async (userId) => {
    const { data } = await $host.get('api/shopingcart/' + userId)
    return data;
}

export const removeOneItemFromBasket = async (userId, deviceId) => {
    const { data } = await $host.put('api/shopingcart/', {
            userId,
            deviceId
        }
    )
    return data;
}