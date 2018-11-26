<template>
  <aside class="section">
    <div>
      <h1 class="rgb-shift">Everything</h1>
    </div>
    <div>
      <h1 class="rgb-shift">Categories</h1>
      <ul>
        <li v-for="(category, index) of this.$store.state.categories" :key="index">
          <a @click="setCategory(category.slug)">{{ category.name }} ({{numberCategory(category.slug)}})</a>
        </li>
      </ul>
    </div>
    <div>
      <h1 class="rgb-shift">Tags</h1>
      <ul>
        <li v-for="(tag, index) of this.$store.state.tags" :key="index">
          <a @click="setTag(tag.slug)">{{ tag.name }} ({{numberTags(tag.slug)}})</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'blog-aside',
  methods: {
    setCategory(slug) {
      console.log(slug)
      if (this.selectedCategories.indexOf(slug) === -1) this.selectedCategories.push(slug)
    },
    setTag(slug) {
      if (this.selectedTags.indexOf(slug) === -1) this.selectedTags.push(slug)
    },
    numberCategory(slug) {
      let i = 0
      this.$store.state.posts.forEach(post => {
        post.categories.forEach(category => {
          if (category.slug === slug) i++
        })
      })
      return i
    },
    numberTags(slug) {
      let i = 0
      this.$store.state.posts.forEach(post => {
        post.tags.forEach(tag => {
          if (tag.slug === slug) i++
        })
      })
      return i
    }
  }
}
</script>

<style scoped>

</style>
