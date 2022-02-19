<template>
  <div>
    Home 页面
    <el-button type="info" @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    loginOut () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style></style>
