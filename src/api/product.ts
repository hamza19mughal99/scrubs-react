import axios from "axios";
import {PAGINATION_LIMIT} from "../utils/helper";

export function getFewProduct() {
    return axios.get("/product-few")
}

export function getProductById(id: string) {
    return axios.get(`/product/${id}`)
}

export function getAllProducts(query: any = {}, page: number) {
    if (query.categories.length <= 0) {
        delete query.categories
    }

    if (!query.size) {
        delete query.size
    }
    if (!query.color) {
        delete query.color
    }

    return axios.post(`/product?page=${page}&size=${PAGINATION_LIMIT}`, query)
}


export function getAllCategories() {
    return axios.get('/category')
}

export function getAllColors() {
    return axios.get('/colors')
}
