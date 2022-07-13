<template>
  <div>
    <div class="city">
      <van-icon name="arrow-left" color="#fff" @click="$router.back()" />
      <Search></Search>
    </div>
    <!-- 下拉导航 -->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域" ref="menu1">
          <van-picker
            title="标题"
            :columns="columns"
            value-key="label"
            item-height="34"
          />
          <div class="button">
            <van-button type="primary" class="btn1" @click="onCancel1"
              >取消</van-button
            >
            <van-button type="primary" class="btn2" @click="onConfirm"
              >确定</van-button
            >
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="方式" ref="menu2">
          <van-picker :columns="columns1" value-key="label">
            <template #columns-bottom>
              <div class="button">
                <van-button type="primary" class="btn1" @click="onCancel2"
                  >取消</van-button
                >
                <van-button type="primary" class="btn2" @click="onConfirm"
                  >确定</van-button
                >
              </div>
            </template>
          </van-picker>
        </van-dropdown-item>
        <van-dropdown-item title="租金" ref="menu3">
          <van-picker :columns="columns2" value-key="label">
            <template #columns-bottom>
              <div class="button">
                <van-button type="primary" class="btn1" @click="onCancel3"
                  >取消</van-button
                >
                <van-button type="primary" class="btn2" @click="onConfirm"
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
        <div class="button">
          <van-button type="primary" class="btn1" @click="is_show = false"
            >取消</van-button
          >
          <van-button type="primary" class="btn2" @click="onConfirm"
            >确定</van-button
          >
        </div>
      </van-sticky>
    </van-popup>
    <div class="house">
      <div v-for="(item, index) in houseList" :key="index">
        <van-card
          :price="item.price"
          :desc="item.desc"
          :title="item.title"
          :thumb="baseurl + item.houseImg"
          @click="
            $router.push({
              name: 'HouseSpecificInfo',
              params: { houseCode: item.houseCode },
            })
          "
        />
      </div>
    </div>
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
      houseList: [],
      value: '',
      baseurl: 'http://liufusong.top:8080',
      end: 99
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
      } catch (error) {
        console.log(error)
      }
      try {
        const res2 = await getHouse({ end: this.end })
        this.houseList = res2.data.body.list
        console.log('res2', res2)
      } catch (error) {
        console.log(error)
      }
    },
    onConfirm () {
      this.value = this.columns.value
      console.log('ssssss', this.value)
    },
    onCancel1 () {
      this.$refs.menu1.toggle()
    },
    onCancel2 () {
      this.$refs.menu2.toggle()
    },
    onCancel3 () {
      this.$refs.menu3.toggle()
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
.house {
  margin-bottom: 100px;
}
</style>
