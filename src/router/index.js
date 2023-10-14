import { createRouter, createWebHistory } from 'vue-router'
import IndexComponents from '@/components/IndexComponents.vue'
import ProjectDetalisComponent from '@/components/ProjectDetalisComponent'
import BlogdetalisComponents from '@/components/BlogdetalisComponents.vue'
import NanComponents from '@/components/NanComponents.vue'


const routes = [
  {
   path:'/',
   name:'Home',
   component:IndexComponents
  },
  {
    path:'/Blog',
    name:'Blog',
    component:BlogdetalisComponents
  },
  {
    path:'/Project',
    name:'Project',
    component:ProjectDetalisComponent
  },
  {
    path:'/:CatchAll(.*)',
    name:'nan',
    component:NanComponents

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
