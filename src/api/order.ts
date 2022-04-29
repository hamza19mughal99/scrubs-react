import axios from "axios";
import {getTokenFormat, PAGINATION_LIMIT} from "../utils/helper";

export function getCustomerOrder(page: number) {
    return axios.get(`/customer/order?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function getGiftByCode(code: string) {
    return axios.get(`/customer/order/gift/${code}`);
}

export function getCouponByCode(code: string) {
    return axios.get(`/customer/order/coupon/${code}`);
}

export function createOrder(userInput: any) {
    return axios.post(`/customer/order`, userInput)
}

export function getTaxOption() {
    return axios.get(`/customer/order/tax`);
}

export function toDisputedOrder(orderId: string) {
    return axios.put(`/customer/order/dispute/${orderId}`, {}, getTokenFormat())
}
