import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import Icon from '@/components/icon.vue';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function IconToComponents(app:any) {
  Object.entries(ElementPlusIconsVue).forEach(Icon => {
    const [key, component] = Icon
    app.component('elIcon' + key, component)
  })
  app.component('my-icon', Icon)
}

