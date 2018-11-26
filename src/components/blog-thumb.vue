<template>
  <article>
      <figure class="image aesthetic-windows-95-container">
        <img v-if="post.featured_image" :src="post.featured_image" alt="">
        <img v-else src="http://via.placeholder.com/250x250" alt="">
        <div class="thumb-wrapper">
          <router-link :to="'/blog' + post.slug"><h1>{{post.title}}</h1></router-link>
          <div class="thumb-info">
            <span>{{prettyDate(post.published)}} </span>
            <router-link class="aesthetic-windows-95-button" :to="'/blog/' + post.slug">Read more</router-link>
          </div>
        </div>
      </figure>
  </article>
</template>

<script>
import { beautifyAuthor, prettyDate } from '../helpers'
export default {
  name: 'blog-thumb',
  props: ['post'],
  methods: {
    beautifyAuthor,
    prettyDate
  }
}
</script>
