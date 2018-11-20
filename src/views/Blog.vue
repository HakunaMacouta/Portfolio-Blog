<template>
  <div class="columns">
    <div class="column">
      <section class="section">
        <h1 class="rgb-shift">Recent posts</h1>
        <div class="posts">
          <blog-thumb class="post-thumb" v-for="(post, index) in this.posts" :key="index" :post="post"></blog-thumb>
        </div>
      </section>
    </div>
    <div class="column is-one-quarter">
      <aside class="section">
        <div>
          <h1 class="rgb-shift">Everything</h1>
        </div>
        <div>
          <h1 class="rgb-shift">Categories</h1>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import BlogHeader from '../components/common-header'
import BlogThumb from '../components/blog-thumb'
export default {
  name: 'blog',
  components: { BlogThumb, BlogHeader },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>
