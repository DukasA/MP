import {$authHost, $host} from "./index";

export const create = async (slide) => {
    const {data} = await $authHost.post('api/slider/create', slide);
    return data;
}

export const fetchSlides = async () => {
    const {data} = await $host.get('api/slider/getall');
    return data;

}