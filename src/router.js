import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/blog',
      name: 'blog',
      component: loadView('Blog')
    },
    {
      path: '/blog/:slug',
      name: 'blog-page',
      component: loadView('BlogPage')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
