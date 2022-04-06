import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
    }, {
      path: '/films',
      name: 'films',
  
      component: () => import('../views/FilmsList.vue')
      }, {
        path: '/description/:filmId',
        name: 'description',
    
        component: () => import('../views/FilmsDetails.vue')
        }
]

const router = new VueRouter({
  routes
})

export default router
