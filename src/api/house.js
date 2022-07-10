import request from '@/utils/request'
/**
 * 获取房屋查询条件
 * @returns
 */
export const getHouseInfo = (id) => {
  return request({
    url: '/houses/condition',
    params: {
      id
    }
  })
}
/**
 * 根据条件查询房屋所需要的各种数据
 * @returns
 */
export const getHouse = (cityId) => {
  return request({
    url: '/houses',
    params: {
      cityId
    }
  })
}
