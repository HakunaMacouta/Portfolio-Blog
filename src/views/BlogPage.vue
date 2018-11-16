<template>
  <div id="blog-post">
    <h1>{{ post.data.title }}</h1>
    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div v-html="post.data.body"></div>
    <vue-disqus shortname="hakunamacouta" :identifier="this.$route.params.slug"></vue-disqus>
  </div>
</template>

<script>
import { butter } from '@/butter'
export default {
  name: 'BlogPage',
  data() {
    return {
      post: {}
    }
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data
        }).catch((res) => {
        })
    }
  },
  created() {
    this.getPost()
  }
}
</script>

<style scoped>

</style>
