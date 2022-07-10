<template>
  <div>
    <div class="city">
      <van-icon name="arrow-left" color="#fff" @click="$router.back()" />
      <Search></Search>
    </div>
    <!-- 下拉导航 -->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker
            show-toolbar
            title="标题"
            :columns="columns"
            value-key="label"
            item-height="34"
          />
          <div class="button">
            <van-button type="primary" class="btn1">取消</van-button>
            <van-button type="primary" class="btn2" @click="onConfirm"
              >确定</van-button
            >
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker :columns="columns1" value-key="label">
            <template #columns-bottom>
              <div class="button">
                <van-button type="primary" class="btn1">取消</van-button>
                <van-button type="primary" class="btn2" @click="fs_ajax"
                  >确定</van-button
                >
              </div>
            </template>
          </van-picker>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker :columns="columns2" value-key="label">
            <template #columns-bottom>
              <div class="button">
                <van-button type="primary" class="btn1">取消</van-button>
                <van-button type="primary" class="btn2" @click="fs_ajax"
                  >确定</van-button
                >
              </div>
            </template>
          </van-picker>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="is_show = true">
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup
      v-model="is_show"
      position="right"
      :style="{ height: '100%', width: '70%' }"
      lock-scroll
    >
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <van-sticky>
        <template #columns-bottom>
          <div class="button">
            <van-button type="primary" class="btn1">取消</van-button>
            <van-button type="primary" class="btn2" @click="fs_ajax"
              >确定</van-button
            >
          </div>
        </template>
      </van-sticky>
    </van-popup>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>

<script>
import Search from '@/components/Search'
import { getcityinfo } from '@/api/city'
import { getHouseInfo, getHouse } from '@/api/house'

export default {
  name: 'findroom',
  created () {
    this.getcityinfo()
  },
  data () {
    return {
      columns: [],
      columns1: [],
      columns2: [],
      is_show: false,
      cityInfo: {},
      subcityList: {},
      value: ''
    }
  },
  methods: {
    async getcityinfo () {
      // 根据城市名称查询该城市信息
      try {
        const res = await getcityinfo(this.$store.state.city)
        console.log(this.$store.state.city)
        this.cityInfo = res.data.body
        console.log('cityInfo', this.cityInfo)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      try {
        const res1 = await getHouseInfo(this.cityInfo.value)
        this.subcityList = res1.data.body
        this.subcityList.area.children[0].children = [{ label: '' }]
        this.subcityList.subway.children[0].children = [{ label: '' }]
        this.columns = [this.subcityList.area, this.subcityList.subway]
        this.columns1 = res1.data.body.rentType
        this.columns2 = res1.data.body.price
        console.log('ssss', this.columns.values)
        console.log('ss', res1)
      } catch (error) {
        console.log(error)
      }
      try {
        const res2 = await getHouse()
        console.log(res2)
      } catch (error) {
        console.log(error)
      }
    },
    onConfirm (value) {
      this.value = value
      console.log(this.value)
    }
  },
  computed: {

  },
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
  width: 750px;
  height: 100px;
  line-height: 100px;
  align-items: center;
  background-color: #21b97a;
}
/deep/ .topnav {
  width: 680px;
  margin-top: 0;
  position: initial;
  .topnav-search {
    width: 540px;
  }
}
/deep/ .van-picker__toolbar {
  display: none;
}
.button {
  width: 100%;
  height: 100px;
  display: flex;
  /deep/ .btn1 {
    flex: 1;
    height: 100px;
    background-color: #fff;
    color: #21b97a;
    border: none;
    border-top: 1px solid #e9e9e9;
    font-size: 36px;
  }
  /deep/ .btn2 {
    flex: 2;
    height: 100px;
    background-color: #21b97a;
    color: #fff;
    font-size: 36px;
  }
}
</style>
