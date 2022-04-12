import {$authHost, $host} from "./index";

export const create = async (post) => {
    const {data} = await $authHost.post('api/post/create', post);
    return data;
}

export const fetchPosts = async () => {
    const {data} = await $host.get('api/post/getall');
    return data;

}

export const deletePost = async (id) => {
    const {data} = await $authHost.post(`api/post/delete`, {id});
    return data;

}
