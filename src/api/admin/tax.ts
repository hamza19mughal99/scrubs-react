import axios from "axios";
import { getTokenFormat, PAGINATION_LIMIT } from "../../utils/helper";

export function getTax(page: number){
  return axios.get(`/admin/tax?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function updateTax(userInput: any, taxId: string) {
  return axios.put(`/admin/tax/${taxId}`, userInput, getTokenFormat())
}
