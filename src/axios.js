// 导入axiox核心
import axios from 'axios'

// 创建实例
export const service = axios.create({
    // baseURL:'http://ceshi13.dishait.cn'
    baseURL:'/api',
    timeout:5000
})
