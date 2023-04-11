import instance from ".";
import { IProduct, UpdateForm } from "../model";

export const getProducts = async () => {
    return instance.get('/products');
}

export const getById = (id: string) => {
    const uri = "/products/" + id;
    return instance.get(uri);
}

export const update = (id: string, body: UpdateForm) => {
    const uri = "/products/" + id;
    return instance.put(uri, body);
}
