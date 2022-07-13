<template>
  <div>
    <van-nav-bar
      :title="HouseSpecificInfo.community"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in HouseSpecificInfo.houseImg"
        :key="index"
      >
        <van-image width="100%" height="100%" :src="baseurl + item" />
      </van-swipe-item>
    </van-swipe>
    <div class="container">
      <van-cell
        :value="HouseSpecificInfo.title ? HouseSpecificInfo.title : '暂无标题'"
        :border="false"
      />
      <van-tag
        type="primary"
        v-for="(item1, index) in HouseSpecificInfo.tags"
        :key="index"
        >{{ item1 }}</van-tag
      >
      <!-- 房屋概况 -->
      <van-grid :column-num="3" :border="false">
        <van-grid-item>
          <div class="desc">
            <p class="desc1">{{ HouseSpecificInfo.price }}/月</p>
            <p>租金</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="desc">
            <p class="desc1">{{ HouseSpecificInfo.roomType }}</p>
            <p>房型</p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div class="desc">
            <p class="desc1">{{ HouseSpecificInfo.size }}/ 平米</p>
            <p>面积</p>
          </div>
        </van-grid-item>
      </van-grid>
      <!-- 房屋描述 -->
      <van-row>
        <van-col span="12"><span>装修: </span>精装修</van-col>
        <van-col
          span="12"
          v-for="(item2, index) in HouseSpecificInfo.oriented"
          :key="index"
          ><span>朝向: </span>{{ item2 }}</van-col
        >
      </van-row>
      <van-row>
        <van-col span="12"
          ><span>楼层: </span>{{ HouseSpecificInfo.floor }}</van-col
        >
        <van-col span="12"><span>类型: </span>普通住宅</van-col>
      </van-row>
      <!-- 房屋配套 -->
      <van-cell
        value="房屋配套"
        :border="false"
      />
      <van-row>
        <van-col
          v-for="(item3, index) in HouseSpecificInfo.supporting"
          :key="index"
          >{{ item3 }}</van-col
        >
      </van-row>
    </div>
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
.container {
  background-color: #fff;
  .van-tag--primary {
    margin-left: 32px;
  }
  .desc {
    text-align: center;
    font-size: 28px;
    .desc1 {
      font-size: 36px;
      color: #fa5741;
    }
  }
  .van-row {
    margin-left: 32px;
    .van-col--12 {
      font-size: 26px;
      span {
        color: #999;
        padding-right: 10px;
      }
    }
  }
}
.van-grid{
  border-top: solid 2px #ccc;
}
</style>
