import { createApp } from 'vue'
import './style.css'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createPinia } from 'pinia'



const app=createApp(App)



// 配置国际化ElementPlus
app.use(ElementPlus, {
  locale: zhCn,
})

// 配置pinia
const pinia = createPinia()
app.use(pinia)


// 导入路由
app.use(router)

app.mount('#app')