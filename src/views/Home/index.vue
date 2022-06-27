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
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          src="http://liufusong.top:8080/img/swiper/1.png"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          src="http://liufusong.top:8080/img/swiper/2.png"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          src="http://liufusong.top:8080/img/swiper/3.png"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  created () { },
  data () {
    return {
      value: ''

    }
  },
  methods: {
    onSearch () { },
    onClickRight () { }
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
  color: #333;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>
