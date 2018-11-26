import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import BlogPost from '@/views/BlogPost.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/category/:slug',
      name: 'blog-category',
      component: Blog
    },
    {
      path: '/blog/tag/:slug',
      name: 'blog-tags',
      component: Blog
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    }
  ]
})
