import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

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
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneItems = async (id) =>{
    const {data} = await $host.get('api/item/' + id);
    return data;
}