<template>
  <div class="container">
    <div class="blog-nav columns">
      <div class="column blog-nav__title-container">
          <div class="blog-nav__title">
            <h1>blog</h1>
            <p>A game, art, personnal blog</p>
          </div>
      </div>
      <div class="column blog-nav__categories-container">
        <div class="columns">
          <div class="column">
            <span class="boxed-text">Chrono</span>
            <div class="blog-nav__container">
              <ul class="blog-nav__list">
                <li v-for="(month, index) in this.months" :key="index">
                  {{ month }}
                </li>
              </ul>
            </div>
          </div>
          <div class="column">
            <span class="boxed-text">Categories</span>
            <div class="blog-nav__container">
              <ul class="blog-nav__list">
                <li v-for="(category, index) in this.$store.state.categories" :key="index">
                  <router-link :to="'/blog/category/' + category.slug">{{ category.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="column blog-nav__ad-container is-hidden-mobile">
      </div>
    </div>
    <div class="thumblist-title">
      <span class="boxed-text">Recents</span>
      <b class="thumblist-title__number">{{ postsNumber }}</b>
    </div>
    <blog-thumb class="post-thumb" v-for="(post, index) in this.posts" :key="index" :post="post"></blog-thumb>
  </div>
</template>

<script>
import BlogThumb from '../components/blog/blog-thumb'
import helpers from '../mixins/helpers'
export default {
  name: 'blog',
  mixins: [ helpers ],
  components: { BlogThumb },
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
    months() {
      return [...new Set(this.posts.map(item => {
        let date = new Date(item.published)
        return {
          'date': date.toLocaleString('en-us', {
            month: 'short',
            year: 'numeric'
          }),
          value: 0
        }
      }))]
    },
    postsNumber() {
      return this.posts.length < 10 ? '0' + this.posts.length : this.posts.length
    }
  }
}
</script>
