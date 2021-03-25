import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
import OPT1 from '../components/OPT1.vue'
import OPT2 from '../components/OPT2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      { path: '/OPT1', component: OPT1 },
      { path: '/OPT2', component: OPT2 }
    ]
  },

]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}



export default router
