import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: resolve => require(['@/components/Login'], resolve) },
  {
    path: '/home',
    component: resolve => require(['@/components/home.vue'], resolve),
    children: [
      {
        path: '/fundlist',
        name: '基金实时列表',
        component: resolve => require(['@/components/fund/FundList'], resolve)
      },
      {
        path: '/todayFundJson',
        name: '今日基金配置',
        component: resolve => require(['@/components/fund/TodayFundJson'], resolve)
      },
      {
        path: '/indexInfo',
        name: '指数信息',
        component: resolve => require(['@/components/index/indexInfo'], resolve)
      },
      {
        path: '/ChartLine',
        name: '折线图',
        component: resolve => require(['@/components/chart/ChartLine'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

function checkToken (to, from, next) {
  // to: 将要访问的路径
  // from: 从哪个页面跳转而来
  // next: 是一个函数，表示放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login') // 如果没有token 直接进登录页面
  next() // 有token的话则放行
}

// 挂载路由导航守卫
router.beforeEach(checkToken)

export default router
