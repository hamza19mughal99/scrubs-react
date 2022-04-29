import jwt from "jwt-decode"
import CryptoJS from "crypto-js";


export function setToken(token: string) {
   localStorage.setItem('token', token);
}

export const PAGINATION_LIMIT = 6

export function getToken() {
   return localStorage.getItem('token');
}

export function getTokenFormat() {
   const token = getToken();
   if (token) {
      return { headers: { Authorization: `Bearer ${token}` } };
   }
}

export function getCurrentUser() {
   if (getToken()) {
      const decode: { user: any } = jwt(getToken()!);
      return decode.user;
   } else {
      return false
   }
}


export function removeToken() {
   localStorage.removeItem("token")
}

export const CART_SECRET = "my-secret-key@123"

export const CUSTOMER_INFO_SECRET = "info"

export function removeCart() {
   localStorage.removeItem("cart")
}

export function removeUserInfo() {
   localStorage.removeItem(CUSTOMER_INFO_SECRET)
}

export function storeEncryptedCartItems(cart: any) {
   const cipherCart = CryptoJS.AES.encrypt(JSON.stringify(cart), CART_SECRET).toString();
   localStorage.setItem("cart", cipherCart)
}

export function storeEncryptedCustomerInfo(info: any) {
   const cipherCart = CryptoJS.AES.encrypt(JSON.stringify(info), CUSTOMER_INFO_SECRET).toString();
   localStorage.setItem(CUSTOMER_INFO_SECRET, cipherCart)
}

export function getDecryptedCustomerInfo() {
   const info = localStorage.getItem(CUSTOMER_INFO_SECRET)
   if (!info) {
      return false
   }
   const bytes = CryptoJS.AES.decrypt(info, CUSTOMER_INFO_SECRET);
   return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}


export function getDecryptedCartItems() {
   const cart = localStorage.getItem("cart")
   if (!cart) {
      return []
   }
   const bytes = CryptoJS.AES.decrypt(cart, CART_SECRET);
   return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
