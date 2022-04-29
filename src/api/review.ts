import axios from "axios";

export function getReviews() {
    return axios.get(`/reviews`)
}

export function createReview(userInput: any, orderId: string) {
    return axios.post(`/reviews/${orderId}`, userInput);
}


export function verifyOrder(orderId: string) {
    return axios.get(`/verify-order/${orderId}`)
}
