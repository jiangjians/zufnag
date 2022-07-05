<template>
  <div>
    <div class="city">
      <van-icon name="arrow-left" color="#fff" @click="$router.back()" />
      <Search></Search>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item title="区域">
        <van-area :area-list="areaList" :confirm-button-text="null" />
      </van-dropdown-item>
      <van-dropdown-item title="方式">
        <van-area :area-list="areaList" :confirm-button-text="null" />
      </van-dropdown-item>
      <van-dropdown-item title="租金">
        <van-area :area-list="areaList" :confirm-button-text="null" />
      </van-dropdown-item>
      <van-dropdown-item title="筛选" @open="is_show = true">
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-popup
      v-model="is_show"
      position="right"
      :style="{ height: '100%', width: '70%' }"
    ></van-popup>
  </div>
</template>

<script>
import Search from '@/components/Search'
import { getcityinfo, cityinfo } from '@/api/city'
export default {
  created () {
    this.getcityinfo()
  },
  data () {
    return {
      areaList: {
        province_list: {
          110000: '区域',
          120000: '地铁'
        },
        city_list: {
          110100: '北京市',
          120100: '天津市'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区'
          // ....
        }
      },
      is_show: false,
      cityInfo: {}
    }
  },
  methods: {
    async getcityinfo () {
      try {
        const res = await getcityinfo(this.$store.state.city)
        this.cityInfo = res.data.body
        console.log(this.cityInfo)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      try {
        const res1 = await cityinfo(this.cityInfo.value)
        console.log(res1)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    Search
  }
}
</script>

<style scoped lang='less'>
.city {
  display: flex;
  width: 100%;
  height: 100px;
  line-height: 100px;
  align-items: center;
  background-color: #21b97a;
}
/deep/ .topnav {
  margin-top: 0;
  position: initial;
  .topnav-search {
    width: 540px;
  }
}
/deep/.van-picker__toolbar {
  display: none;
}
</style>
