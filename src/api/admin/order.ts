import axios from "axios";
import {getTokenFormat, PAGINATION_LIMIT} from "../../utils/helper";

export function getOrder(page: number) {
    return axios.get(`/admin/orders?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}


export function getPendingOrder(page: number) {
    return axios.get(`/admin/orders/pending?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function getInProgressOrder(page: number) {
    return axios.get(`/admin/orders/in-progress?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function getCancelledOrder(page: number) {
    return axios.get(`/admin/orders/cancelled?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function getCompletedOrder(page: number) {
    return axios.get(`/admin/orders/completed?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function getOrderById(orderId: string) {
    return axios.get(`/admin/orders/${orderId}`, getTokenFormat())
}


export function toInProgressOrder(orderId: string) {
    return axios.put(`/admin/orders/in-progress/${orderId}`, {},getTokenFormat())
}


export function toCompletedOrder(orderId: string) {
    return axios.put(`/admin/orders/completed/${orderId}`, {},getTokenFormat())
}

export function toCancelledOrder(orderId: string) {
    return axios.put(`/admin/orders/cancelled/${orderId}`, {},getTokenFormat())
}
