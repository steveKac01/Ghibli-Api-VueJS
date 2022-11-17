import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
 
  {
      path: '/',
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
