import {request} from "@/utils/useMyFetch.js"
import env from "@/config/env.js"

//登录
export const getLogin = (payload) => {
  return request('/user/login',payload, env.API_BASE_URL_USER);
}

//获取注册验证码
export const registerCaptcha = (payload) => {
  return request('/user/register-captcha',payload, 'GET',env.API_BASE_URL_USER);
}

//注册
export const register = (payload) => {
  return request('/user/register',payload, 'POST',env.API_BASE_URL_USER);
}