import axios from "axios";
import { getTokenFormat, PAGINATION_LIMIT } from "../../utils/helper";

export function getUsers(page: number) {
  return axios.get(`/admin/user?page=${page}&size=${PAGINATION_LIMIT}`, getTokenFormat())
}

export function createUsers(userInput: any) {
  return axios.post(`/admin/user`, userInput, getTokenFormat())
}
