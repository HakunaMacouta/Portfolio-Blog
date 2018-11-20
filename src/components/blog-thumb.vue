<template>
    <article>
      <div class="columns">
        <div class="column is-one-third">
          <figure class="image is-128x128">
            <img v-if="post.featured_image" :src="post.featured_image" alt="">
            <img v-else src="http://via.placeholder.com/250x250" alt="">
          </figure>
        </div>
        <header class="column is-two-thirds">
          <router-link class="post-title" :to="'/blog/' + post.slug"><h2>{{ post.title }}</h2></router-link>
          <!--<p> {{ post.author.first_name + " " + post.author.last_name }}</p>-->
          <p>{{ post.summary }}</p>
        </header>
      </div>
      <div class="columns">
        <div class="column">
          {{ formatDate(post.published) }}
        </div>
        <div class="column">
        </div>
      </div>
    </article>
</template>

<script>
export default {
  name: 'blog-thumb',
  props: ['post'],
  methods: {
    formatDate(str) {
      let date = new Date(str)
      return date.getUTCMonth()
    }
  }
}
</script>
