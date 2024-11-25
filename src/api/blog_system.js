import {request} from "@/utils/useMyFetch.js"
import env from "@/config/env.js"

//创建分类
export const createCategory = (payload) => {
  return request('blog/category',payload,'POST', env.API_BASE_URL_BLOG_SYSTEM);
}


//创建博客
export const createBlog = (payload) => {
  return request('blog/create-blog',payload,'POST', env.API_BASE_URL_BLOG_SYSTEM);
}

//上传序图
export const uploadImage = (payload) => {
  return request('blog/image',payload,'POST',env.API_BASE_URL_BLOG_SYSTEM)
}