<template>
  <div class="columns">
    <div class="column">
      <section class="section">
        <h1>Recent posts</h1>
        <div class="posts">
          <div class="post-thumb" v-for="(post,index) in posts" :key="post.slug + '_' + index">
            <article>
              <div class="columns">
                <div class="column is-one-third">
                  <figure class="image is-128x128">
                    <!-- Bind results using a ':' -->
                    <!-- Use a v-if/else if their is a featured_image -->
                    <img v-if="post.featured_image" :src="post.featured_image" alt="">
                    <img v-else src="http://via.placeholder.com/250x250" alt="">
                  </figure>
                </div>
                <header class="column is-two-thirds">
                  <router-link class="post-title" :to="'/blog/' + post.slug"><h2>{{ post.title }}</h2></router-link>
                  <p> {{ post.author.first_name + " " + post.author.last_name }}</p>
                  <p>{{ post.summary }}</p>
                </header>
              </div>
              <footer class="columns">
                <div class="column">
                  {{ formatDate(post.published) }}
                </div>
                <div class="column">
                </div>
              </footer>
            </article>
          </div>
        </div>
      </section>
    </div>
    <div class="column is-one-quarter">
      <aside class="section">
        <div>
          <h1>Everything</h1>
        </div>
        <div>
          <h1>Categories</h1>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import BlogHeader from '../components/common-header'
export default {
  name: 'blog',
  components: { BlogHeader },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10
      })
        .then((res) => {
          this.posts = res.data.data
        })
    },
    formatDate(str) {
      let date = new Date(str)
      return date.getUTCMonth()
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
