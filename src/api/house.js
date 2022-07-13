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
export const getHouse = (params) => {
  return request({
    url: '/houses',
    params
  })
}
/**
 * 查询房屋具体信息
 * @returns
 */
export const getHouseSpecificInfo = (houseCode) => {
  return request({
    url: `/houses/${houseCode}`,
    params: {
      houseCode
    }
  })
}
