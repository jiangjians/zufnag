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
export const gethotcity = (level) => {
  return request({
    url: '/area/hot'
  })
}
/**
 * 根据城市名称查询该城市信息
 * @returns
 */
export const getcityinfo = () => {
  return request({
    url: '/area/info'

  })
}
/**
 * 根据城市名称查询该城市信息
 * @returns
 */
export const cityinfo = () => {
  return request({
    url: '/area'
  })
}
