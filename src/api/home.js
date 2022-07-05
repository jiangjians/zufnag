/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'
/**
  * 首页轮播图
  */
export const getimg = () => {
  return request({
    url: '/home/swiper'
  })
}

/**
 * 租房小组信息
 * @returns
 */
export const getgroup = () => {
  return request({
    url: '/home/groups'
  })
}
