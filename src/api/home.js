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
