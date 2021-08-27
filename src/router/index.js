import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'
import OPT1 from '../components/OPT1.vue'
import OPT2 from '../components/OPT2.vue'
import OPT3 from '../components/OPT3.vue'
import OPT4 from '../components/OPT4.vue'
import OPT5 from '../components/Jsonhighight.vue'
// import swiper from '../views/swiper/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      { path: '/OPT1', component: OPT1 },
      { path: '/OPT2', component: OPT2 },
      { path: '/OPT3', component: OPT3 },
      { path: '/OPT4', component: OPT4 },
      { path: '/OPT5', component: OPT5 },

    ]
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/swiper/index.vue'),

  }

]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}



export default router
