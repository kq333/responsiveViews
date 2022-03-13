import { createRouter, createWebHistory } from 'vue-router'
import ProductName from '../views/ProductName.vue'

const routes = [
  {
    path: '/collection',
    name: 'Collection',
    component: () => import(/* webpackChunkName: "about" */ '../views/Collection.vue')
  },
  {
    path: '/collectionDetails',
    name: 'CollectionDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/CollectionDetails.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'ProductName',
    component: ProductName
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
