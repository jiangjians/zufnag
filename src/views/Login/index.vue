<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <!-- 账号密码框 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        type="username"
        name="username"
        placeholder="请输入账号"
      />
      <van-field
        v-model.trim="password"
        name="password"
        type="password"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button round block native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="registe">
      <a href="#"> 还没有账号，去注册~ </a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/my')
    },

    async onSubmit (values) {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        if (this.username.length === 0 || this.password.length === 0) { return this.$toast('不能为空') }
        const c = /^[a-zA-Z0-9]{5,8}$/
        const d = /^[a-zA-Z0-9]{6,12}$/
        if (!this.username.match(c)) { return this.$toast('账号的格式为5~8位的数字和字母') }
        if (!this.password.match(d)) { return this.$toast('密码的格式为5~8位的数字和字母') }
        const res = await login(values)
        if (res.data.status === 400) { return this.$toast('你的账号或者密码异常') }
        this.$router.push('/home')
        this.$toast.success('登录成功')
        console.log(res)
        this.$store.commit('setUser', res.data.body)
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败')
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
// .van-field{
//   height: 120px;
// }
/deep/ .van-field__control {
  height: 120px;
  padding: 4px 0;
  border-bottom: 2px solid #ddd !important;
  font-size: 34px;
}
.van-nav-bar {
  margin-bottom: 21px;
}
.van-button {
  border-radius: 5px;
  height: 100px;
  font-size: 36px;
  background-color: #1cb676;
}
.registe {
  text-align: center;
  font-size: 28px;
  margin-top: 60px;
  a {
    color: #666;
    cursor: pointer;
  }
}
</style>
