import Vue from 'vue'
import Router from 'vue-router'


import goods from '../components/goods/goods'
import sellers from '../components/sellers/sellers'
import ratings from '../components/ratings/ratings'


Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    { path: '/',component: goods},
    { path: '/goods',component: goods},
    { path: '/sellers',component: sellers},
    { path: '/ratings',component: ratings},
  ]
})
