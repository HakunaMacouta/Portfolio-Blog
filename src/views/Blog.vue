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
    <div class="column is-one-fifth">
      <blog-aside></blog-aside>
    </div>
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
    }
  }
}
</script>
