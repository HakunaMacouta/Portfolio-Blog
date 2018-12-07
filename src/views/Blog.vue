<template>
  <div class="container">
    <blog-nav></blog-nav>
    <div class="thumblist-title">
      <span class="boxed-text">{{ title }}</span>
      <hr />
      <b class="thumblist-title__number">{{ prettyNumber(this.posts.length) }}</b>
    </div>
    <blog-thumb v-for="(post, index) in this.posts" :key="index" :post="post"></blog-thumb>
    <div class="thumblist-title">
      <!--<span class="boxed-text"></span>-->
      <hr />
      <span class="thumblist-title__number is-centered">{{ prettyNumber(1) }}</span>
      <hr />
      <span class="boxed-text">Next</span>
    </div>
  </div>
</template>

<script>
import BlogThumb from '../components/blog/blog-thumb'
import helpers from '../mixins/helpers'
import BlogNav from '../components/blog/blog-nav'
export default {
  name: 'blog',
  mixins: [ helpers ],
  components: { BlogNav, BlogThumb },
  data() {
    return {
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
    title() {
      return (this.$route.name === 'blog-month' ||
      this.$route.name === 'blog-category')
        ? (this.$route.name === 'blog-month')
          ? this.$route.params.slug.replace(/-/g, ' ')
          : this.$route.params.slug
        : 'Recents'
    }
  }
}
</script>
