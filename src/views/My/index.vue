<template>
  <div>
    <!-- 登录 -->
    <div class="login" v-if="this.user && this.user.token">
      <van-image width="100%" height="100%" :src="baseurl + userInfo.avatar" />
      <div class="notlogin-info">
        <div class="notlogin-avatar">
          <van-image width="60" height="60" :src="baseurl + userInfo.avatar" />
        </div>
        <div>
          <p>{{ userInfo.nickname }}</p>
          <van-button type="info" @click="logout"> 退出 </van-button>
          <div class="bianji" @click="$router.push('/user')">
            编辑个人资料
            <van-icon name="play" />
          </div>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="notlogin" v-else>
      <van-image
        width="100%"
        height="100%"
        src="http://liufusong.top:8080/img/profile/bg.png"
      />
      <div class="notlogin-info">
        <div class="notlogin-avatar">
          <van-image
            width="60"
            height="60"
            src="http://liufusong.top:8080/img/profile/avatar.png"
          />
        </div>
        <div>
          <p>游客</p>
          <van-button type="info" @click="$router.push('/login')">
            去登录
          </van-button>
        </div>
      </div>
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="underway-o" text="看房记录" />
      <van-grid-item icon="idcard" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <div class="foot-img">
      <van-image
        width="92%"
        height="10%"
        src="http://liufusong.top:8080/img/profile/join.png"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  async created () {
    if (this.user && this.user.token) {
      try {
        const res = await getUserInfo()
        this.userInfo = res.data.body
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  },
  data () {
    return {
      baseurl: 'http://liufusong.top:8080',
      userInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定要退出登录吗' })
        this.$store.commit('setUser', {})
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.notlogin {
  position: relative;
  min-height: 600px;
  .notlogin-info {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    width: 85%;
    height: 55%;
    padding: 0 20px;
    text-align: center;
    box-shadow: 0 0 10px 3px #ddd;
    .notlogin-avatar {
      transform: translateY(-50%);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      margin: 0 auto;
      border: 10px solid #f5f5f5;
    }
    p {
      margin-top: -40px;
      margin-bottom: 20px;
      font-size: 26px;
    }
    .van-button {
      width: 160px;
      height: 60px;
      background-color: #21b97a;
      border-radius: 10px;
    }
  }
}
.login {
  position: relative;
  min-height: 750px;
  .notlogin-info {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    width: 85%;
    height: 55%;
    padding: 0 20px;
    text-align: center;
    box-shadow: 0 0 10px 3px #ddd;
    .notlogin-avatar {
      transform: translateY(-50%);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      margin: 0 auto;
      border: 10px solid #f5f5f5;
    }
    p {
      margin-top: -40px;
      font-size: 26px;
    }
    .van-button {
      width: 100px;
      height: 40px;
      background-color: #21b97a;
      border-radius: 30px;
      color: #fff;
      padding: 2px 15px;
      font-size: 12px;
      transform: translateY(-50%);
    }
    .bianji {
      color: #999;
      font-size: 12px;
      margin-top: 20px;
    }
  }
}
.foot-img {
  text-align: center;
  margin-bottom: 100px;
}
.van-grid {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
