import axios from "axios";
import { getTokenFormat } from "../../utils/helper";

export function getShippingCost() {
  return  axios.get("/shipping-cost/6262a601724dba1e9aa725d5", getTokenFormat())
}

export function updateShippingCost(userInput: any) {
  return axios.put("/shipping-cost/6262a601724dba1e9aa725d5", userInput, getTokenFormat())
}
