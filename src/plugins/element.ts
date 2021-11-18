import { App } from '@vue/runtime-dom'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export default (app: App<Element>) => {
  app.use(ElementPlus)
}
