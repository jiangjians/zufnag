import request from '@/utils/request'

/**
 * 城市列表
 * @returns
 */
export const getcity = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}
/**
 * 热门城市列表
 * @returns
 */
export const gethotcity = () => {
  return request({
    url: '/area/hot'
  })
}
/**
 * 根据城市名称查询该城市信息
 * @returns
 */
export const getcityinfo = (name) => {
  return request({
    url: '/area/info',
    params: {
      name
    }
  })
}
