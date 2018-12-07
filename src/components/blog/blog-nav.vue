<template>
  <div class="blog-nav columns">
    <div class="column blog-nav__categories-container">
      <div class="columns">
        <div class="column">
          <span class="boxed-text">Chrono</span>
          <div class="route-container">
            <ul class="route-container__list">
              <li class="is-clearfix route-container__item" v-for="(month, index) in this.months" :key="index">
                <router-link :to="'/blog/month/' + month.replace(/ /g, '-')">
                  <span class="is-pulled-left">{{ month }}</span>
                  <span class="is-pulled-right">| {{ prettyNumber(monthCount[month])}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="column">
          <span class="boxed-text">Categories</span>
          <div class="route-container">
            <ul class="route-container__list">
              <li class="is-clearfix route-container__item" v-for="(category, index) in this.$store.state.categories" :key="index">
                <router-link :to="'/blog/category/' + category.slug">
                  <span class="is-pulled-left">{{ category.name }}</span>
                  <span class="is-pulled-right">| {{ prettyNumber(1) }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="column blog-nav__title-container">
      <div class="blog-nav__title">
        <h1>blog</h1>
        <p>A game, art, personnal blog</p>
      </div>
    </div>
    <div class="column blog-nav__ad-container is-hidden-touch">
      <img src="/img/ad.gif" />
    </div>
  </div>
</template>

<script>
import helper from '../../mixins/helpers'
export default {
  name: 'blog-nav',
  mixins: [ helper ],
  computed: {
    posts() {
      return this.$store.state.posts
    },
    months() {
      return [...new Set(this.posts.map(post => {
        let date = new Date(post.published)
        return date.toLocaleString('en-us', {
          month: 'short',
          year: 'numeric'
        })
      }))]
    },
    monthCount() {
      let counts = []
      this.posts.forEach((post) => {
        let date = new Date(post.published).toLocaleString('en-us', {
          month: 'short',
          year: 'numeric'
        })
        counts[date] = counts[date] ? counts[date] + 1 : 1
      })
      return counts
    }
  }
}
</script>

<style scoped>

</style>
