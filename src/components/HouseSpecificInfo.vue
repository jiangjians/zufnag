<template>
  <div>
    <van-nav-bar
      :title="this.HouseSpecificInfo.community"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in this.HouseSpecificInfo.houseImg"
        :key="index"
      >
        <van-image width="100%" height="100%" :src="baseurl + item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getHouseSpecificInfo } from '@/api/house'
export default {
  props: {
    houseCode: {
      type: [String, Number],
      required: true
    }
  },
  created () {
    this.getHouseSpecificInfo()
  },
  data () {
    return {
      HouseSpecificInfo: {},
      baseurl: 'http://liufusong.top:8080'

    }
  },
  methods: {
    async getHouseSpecificInfo () {
      try {
        const res = await getHouseSpecificInfo(this.houseCode)
        this.HouseSpecificInfo = res.data.body
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

<style scoped lang='less'>
</style>
