<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="" />
        <span>基金后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '61px' : '200px'">
        <div class="toggle-button" @click="toggleCollpase">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
        >
          <!-- 左侧菜单 -->
          <el-menu-item v-for="item in menuList" :key="item.id" @click="turnToPath(item.path)">
            <!-- 左侧菜单的模板区域 -->
            <template slot="title">
                <!-- 二级菜单的模板区域 -->
                <i class="el-icon-menu"></i>
                <!-- 图标 -->
                <span>{{ item.name }}</span>
                <!-- 文本 -->
              </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主题 -->
      <el-main>
        <!-- 路由占位符 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
        </el-breadcrumb>
        <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive" :key="this.$route.path"></router-view>
        </keep-alive>
            <router-view v-if="!this.$route.meta.keepAlive" :key="this.$route.path"></router-view>
        <!-- <router-view :key="this.$route.fullPath"></router-view> -->
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // 左侧菜单数据
      menuList: [
        { id: 1, name: '今日配置', path: '/todayFundJson' },
        { id: 2, name: '基金列表', path: '/fundlist' },
        { id: 3, name: '指数信息', path: '/indexInfo' },
        { id: 4, name: '折线图', path: '/ChartLine' }],
      iconsObj: {
        // 一级菜单的icon图标
        147: 'el-icon-magic-stick',
        125: 'iconfont icon-users',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      isCollapse: false // 是否折叠属性
    }
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 点击按钮,切换菜单的折叠和展开
    toggleCollpase () {
      this.isCollapse = !this.isCollapse
    },
    turnToPath (toPath) {
      this.$router.push({ path: toPath })
    }
  }
}
</script>

<style lang="less" scoped>
.hwelcome {
  color: #fff;
  font-size: 15px;
  height: 25px;
  text-align: center;
  background: green;
  span {
    margin-left: 10px;
  }
}
.home-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  background-color: #373d3f;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont {
  padding-right: 10px;
}
.toggle-button {
  background: #4a5064;
  font-size: 10px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
