<template>
  <div>
    <div class="topnav">
      <div class="topnav-search">
        <div class="location">
          <span @click="$router.push('/city')">{{
            this.$store.state.city
          }}</span>
          <i class="iconfont icon-xiajiantou"></i>
        </div>
        <div class="form">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入小区或地址" />
        </div>
      </div>
      <i class="iconfont icon-ditu"></i>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.topnav {
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 1;
  margin-top: 50px;
  padding: 0 20px;
  height: 68px;
  line-height: 68px;
  .topnav-search {
    display: flex;
    width: 620px;
    margin: 0 20px;
    background-color: #fff;
    height: 68px;
    padding: 10px 10px 10px 16px;
    line-height: 38px;
    border-radius: 6px;
    .location {
      width: 84px;
      span {
        font-size: 28px;
        margin-right: 4px;
      }
      .icon-xiajiantou {
        display: inline;
      }
    }
    .form {
      margin-left: 24px;

      input {
        width: 300px;
        height: 100%;
        font-size: 26px;
        padding-left: 8px;
      }
      .icon-sousuo {
        /* vertical-align: middle; */
        font-size: 30px;
        padding: 0 4px 0 24px;
        border-left: 2px solid #e5e5e5;
      }
    }
  }
  .icon-ditu {
    font-size: 50px;
    color: #fff;
  }
}
</style>
