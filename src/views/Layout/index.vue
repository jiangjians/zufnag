<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home"
        >首页
        <template #icon>
          <i class="iconfont icon-shouye"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/findroom"
        >找房
        <template #icon>
          <i class="iconfont icon-sousuo"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/consultation" icon="search"
        >资讯
        <template #icon>
          <i class="iconfont icon-zixun"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search"
        >我的
        <template #icon>
          <i class="iconfont icon-wode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
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

<style scoped lang="less">
.iconfont{
font-size: 44px;
}
</style>
