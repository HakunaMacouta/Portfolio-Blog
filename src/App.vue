<template>
  <div>
    <common-header></common-header>
    <main>
      <router-view/>
    </main>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './components/common/common-header'
import CommonFooter from './components/common/common-footer'
export default {
  components: { CommonFooter, CommonHeader },
  created() {
    this.$store.dispatch('blogPosts')
    this.$store.dispatch('blogCategories')
    this.$store.dispatch('blogTags')
  },
}
</script>
