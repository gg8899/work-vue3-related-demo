import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,  // 使用自动生成的路由
})

export default router