import {createRouter,createWebHistory} from 'vue-Router'
// import { useUserDataStore } from '@/stores';
import { ElMessage } from 'element-plus';

// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "login" */ '../views/home/index.vue')
  },
//   {
//     path: '/menu',
//     name: 'menu',
//     component: () => import(/* webpackChunkName: "menu" */ '../views/menu/index.vue'),
//     children: [
//       {
//         path: '/home',
//         name: 'home',
//         component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
//       },
//       {
//         path: '/set',
//         name: 'set',
//         component: () => import(/* webpackChunkName: "set" */ '../views/set/index.vue')
//       },
//       {
//         path: '/user/superAdmin',
//         name: 'superAdmin',
//         component: () => import(/* webpackChunkName: "superAdmin" */ '../views/user/superAdmin.vue')
//       },
//       {
//         path: '/user/admin',
//         name: 'admin',
//         component: () => import(/* webpackChunkName: "admin" */ '../views/user/admin.vue')
//       },
//       {
//         path: '/user/custom',
//         name: 'custom',
//         component: () => import(/* webpackChunkName: "custom" */ '../views/user/custom.vue')
//       },
//       {
//         path: '/good/in',
//         name: 'goodIn',
//         component: () => import(/* webpackChunkName: "goodIn" */ '../views/good/goodIn.vue')
//       },
//       {
//         path: '/good/list',
//         name: 'goodList',
//         component: () => import(/* webpackChunkName: "goodList" */ '../views/good/goodList.vue')
//       },
//       {
//         path: '/overview',
//         name: 'systemOverview',
//         component: () => import(/* webpackChunkName: "overview" */ '../views/systemOverview/index.vue')
//       }
//     ]
//   }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 清除浏览器历史记录的函数
function clearBrowserHistory() {
  window.history.replaceState(null, '', window.location.href);
}

// 导出路由实例
export default router;