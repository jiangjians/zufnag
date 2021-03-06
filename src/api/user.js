/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'
/**
 * 用户登录
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'user/login',
    data: {
      username,
      password
    }
  })
}
/**
 *获取用户资料
 * @returns
 */
export const getUserInfo = () => {
  return request({
    url: 'user'

  })
}
