<template>
  <div>
    <van-search
      v-model="value"
      show-action
      label="北京▾"
      left-icon="search"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <van-icon name="search" class="search"/>
      </template>
    </van-search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.id">
        <van-image width="100%" height="100%" :src="baseurl + item.imgSrc" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

import { getimg } from '@/api/home'
export default {

  created () {
    this.getimg()
  },

  data () {
    return {
      value: '',
      imgList: [],
      baseurl: 'http://liufusong.top:8080'
    }
  },
  methods: {
    onSearch () { },
    onClickRight () { },
    async getimg () {
      try {
        const res = await getimg()
        this.imgList = res.data.body
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang = 'less'>
.van-search {
  position: fixed;
  z-index: 1;
  width: 100%;
}
/deep/ .van-icon-search {
  border-left: 1px solid #e5e5e5 !important;
  padding: 0 4px 0 24px;
}
.van-search__content {
  padding: 10px 10px 10px 16px;
}
.my-swipe .van-swipe-item {
  height: 414px;
  color: #333;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.search{
  border: unset;
}
</style>
