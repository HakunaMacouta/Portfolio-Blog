<template>
  <div id="fleche">
    <div class="foil" v-html="post.body">
    </div>
  </div>
</template>

<script>
import butter from '../config/butter'
export default {
  name: 'BlogPost',
  data() {
    return {
      post: null
    }
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data.data
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
