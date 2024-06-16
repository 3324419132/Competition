import { useUserDataStore } from '/src/store/user/index.js';
import {createRouter,createWebHistory} from 'vue-Router'
import { ElMessage, ElForm } from 'element-plus';



// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "home" */ '../views/menu/index.vue'),
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
      },
      {
        path: '/enrolment',
        name: 'enrolment',
        component: () => import(/* webpackChunkName: "home" */ '../views/enrolment/index.vue')
      },
      {
        path: '/brochures',
        name: 'brochures',
        component: () => import(/* webpackChunkName: "home" */ '../views/brochures/index.vue')
      },
      {
        path: '/judgement',
        name: 'judgement',
        component: () => import(/* webpackChunkName: "home" */ '../views/judgement/index.vue')

      }
    ]
  },

];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const userData = useUserDataStore()
  // 确保 Pinia 已经初始化
  // if (!userData) {
  //   next('/home') // 或者重定向到其他页面
  //   return
  // }

  // 在这里进行路由检测逻辑
  if (!userData.token && (to.path !== '/home' && to.path !== '/brochures')) {
    ElMessage({
      message: '请先登录',
      type: 'error'
    })
    next(from.path) // 重定向到登录页或其他页面
  } else {
    next()
  }
})

// 清除浏览器历史记录的函数
function clearBrowserHistory() {
  window.history.replaceState(null, '', window.location.href);
}

// 导出路由实例
export default router;