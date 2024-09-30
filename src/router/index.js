import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import('@/views/Index.vue')
    } ,
    {
      path: '/product',
      name: 'AllProduct',
      component:() => import('@/views/AllProduct.vue')
    },
    {
      path: '/vendor',
      name: 'Vendor',
      component:() => import('@/views/Vendor.vue')
    },
    {
      path: '/shops',
      name: 'Shops',
      component:() => import('@/views/Shops.vue')
    },
    {
      path: '/single-Product',
      name: 'SingleProduct',
      component:() => import('@/views/SingleProduct.vue')
    },
    {
      path: '/category',
      name: 'Category',
      component:() => import('@/views/Category.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component:() => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component:() => import('@/views/Register.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component:() => import('@/views/Profile.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component:() => import('@/views/AddToCart.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component:() => import('@/views/Checkout.vue')
    },
  ]
})

export default router
