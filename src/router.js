import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'
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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
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
      path: '/blog/month/:slug',
      name: 'blog-month',
      component: Blog
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    }
  ]
})
