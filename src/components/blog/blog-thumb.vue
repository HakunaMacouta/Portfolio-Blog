<template>
  <div class="thumb columns">
    <div class="column">
      <div class="thumb__image" :style="'background:url(' + post.featured_image + ') center center'">
        <div class="thumb__strip">
          <router-link class="boxed-text" :to="'/blog/' + post.slug">Read more</router-link>
        </div>
        <router-link :to="'/blog/' + post.slug"> {{ post.title }}</router-link>
      </div>
    </div>
    <div class="thumb__info column">
      <div class="thumb__ref">
        <b>{{this.beautifyAuthor(post.author)}}</b>
        <b>{{this.prettyDate(post.published)}}</b>
      </div>
      <div class="thumb__description">
        <div class="thumb__summary" v-html="post.summary"></div>
        <div class="thumb__categories">
          <router-link :to="'/blog/category/' + category.slug" v-for="(category, index) in post.categories">
            {{ category.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { helpers } from '@/mixins'
export default {
  name: 'blog-thumb',
  props: ['post'],
  mixins: [ helpers ]
}
</script>
