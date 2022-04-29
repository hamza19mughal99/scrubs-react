import axios from "axios";
import { getTokenFormat, PAGINATION_LIMIT } from "../../utils/helper";

export function getCategories(page: number) {
  return axios.get(
    `/admin/category?page=${page}&size=${PAGINATION_LIMIT}`,
    getTokenFormat()
  );
}

export function createCategories(userInput: any) {
  return axios.post(`/admin/category`, userInput, getTokenFormat());
}

export function updateCategories(userInput: any, categoryId: string) {
  return axios.put(
    `/admin/category/${categoryId}`,
    userInput,
    getTokenFormat()
  );
}

export function getCategoryById(categoryId: string) {
  return axios.get(`/admin/category/${categoryId}`, getTokenFormat());
}

export function deleteCategory(categoryId: string) {
  return axios.delete(`/admin/category/${categoryId}`, getTokenFormat());
}

export function getCategoryOptions() {
  return axios.get("/admin/category-select", getTokenFormat())
}
