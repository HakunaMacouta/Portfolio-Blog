<template>
  <div class="container">
    <div class="blog-nav columns">
      <div class="column">
        <img src="/img/magritte.gif" alt="magritte gif" />
        <div class="blog-nav__info">
          <h1>blog</h1>
          <p>A game, art, personnal blog</p>
        </div>
      </div>
      <div class="column">
      cc
      </div>
      <div class="column">
        cc
      </div>
    </div>
    <div class="thumblist-title">
      <span class="thumblist-title__info">Recents</span>
      <b class="thumblist-title__number">{{ postsNumber }}</b>
    </div>
    <blog-thumb class="post-thumb" v-for="(post, index) in this.posts" :key="index" :post="post"></blog-thumb>
  </div>
</template>

<script>
import BlogHeader from '../components/common/common-header'
import BlogThumb from '../components/blog/blog-thumb'
import BlogAside from '../components/blog/blog-aside'
export default {
  name: 'blog',
  components: { BlogAside, BlogThumb, BlogHeader },
  data() {
    return {
      selectedCategories: [],
      selectedTags: []
    }
  },
  methods: {
  },
  computed: {
    posts() {
      return this.$store.state.posts.filter((post, index, self) => {
        return post
      })
    },
    postsNumber() {
      return this.posts.length < 10 ? '0' + this.posts.length : this.posts.length
    }
  }
}
</script>
