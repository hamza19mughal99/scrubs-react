import axios from "axios";
import {getTokenFormat, PAGINATION_LIMIT} from "../../utils/helper";

export function getDisputedOrder(page: number) {
    return axios.get(`/admin/orders/dispute?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function toApprovedDispute(orderId: string) {
    return axios.put(`/admin/orders/dispute/approved/${orderId}`, {}, getTokenFormat())
}

export function getApprovedOrder(page: number) {
    return axios.get(`/admin/orders/dispute/approved?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}
