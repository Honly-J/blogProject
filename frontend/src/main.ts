import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import IconToComponents from '@/plugins/icons'
const appObj = createApp(App)
IconToComponents.call(null, appObj)
appObj.use(store).use(router).use(ElementPlus).mount('#app')
