<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar :index-list="indexList">
      <div v-for="(item1, index) in indexList" :key="index">
        <van-index-anchor :index="item1">{{
          item1 === "#" ? "当前城市" : item1 === "热" ? "热门城市" : item1
        }}</van-index-anchor>
        <van-cell
          @click="onClick"
          v-for="(item, index) in obj[item1]"
          :key="index"
          :title="item.label"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
// import _ from 'lodash'
import { getcity, gethotcity } from '@/api/city'
export default {
  created () {
    this.getcity()
  },
  data () {
    return {
      indexList: ['#', '热'],
      level: 1,
      cityList: [],
      obj: {},
      hotlist: []
    }
  },
  methods: {
    async getcity () {
      try {
        // 获取城市列表
        const res = await getcity(this.level)
        this.cityList = res.data.body
        const obj = {}
        // 进行遍历，把获得数据进行重组
        this.cityList.forEach(item => {
          const f = item.short.substr(0, 1).toUpperCase()
          if (obj[f]) {
            obj[f].push(item)
          } else {
            obj[f] = [item]
          }
          this.obj = { ...obj, ...this.cityList }
          this.cityLetterList = Object.keys(obj).sort()
        })
        // 导航索引
        this.indexList.push(...this.cityLetterList)
        // console.log(this.cityList)
        // console.log(obj)
        // console.log('city', res)
      } catch (error) {
        console.log(error)
      }
      try {
        // 获取热门城市列表
        const res1 = await gethotcity()
        console.log('hotcity', res1)
        this.hotlist = res1.data.body // 获取热门城市数据
        this.obj = { ...this.obj, 热: this.hotlist, '#': [{ label: this.$store.state.city }] }
      } catch (error) {
        console.log(error)
      }
    },
    onClick (e) {
      // 判断
      if (e.target.innerText === '北京' || e.target.innerText === '上海' || e.target.innerText === '深圳' || e.target.innerText === '广州') {
        // 把点击的城市名字存到vuex中
        this.$store.commit('setCity', e.target.innerText)
        this.$router.go(-1)// 后退一步
      } else {
        this.$toast.fail('该城市暂无房源')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
  }
}
</script>

<style scoped lang='less'>
</style>
