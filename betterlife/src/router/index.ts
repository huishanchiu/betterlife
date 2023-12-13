import { createRouter, createWebHistory } from 'vue-router'
import InterView from '../views/InterView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Questions from '../views/Questions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mock-interview',
      name: 'mockInterview',
      component: InterView
    },
    {
      path: '/interview-questions',
      name: 'interview-questions',
      component: Questions
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
