// 自动导入 modules 下的vuex模块文件 无需手动引入
import camelCase from 'lodash/camelCase'
const requireModules = require.context('./', false, /\.ts$/)
const modules = Object.create(null)
requireModules.keys().forEach((file:string) => {
  if (file !== './index.ts') {
    const fileName = file.split('/').pop()
    const moduleName = camelCase(fileName?.replace(/\.ts$/g, ''))
    const theModule = requireModules(file)
    const fileModule = theModule.default || theModule
    modules[moduleName] = { ...fileModule }
  }
})
export default modules