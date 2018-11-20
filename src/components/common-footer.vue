<template>
  <footer>
    <div class="has-text-centered container">
      <ul class="inline-list">
        <template v-for="(network, index) in this.$store.state.networks">
          <li class="navbar-item"><a class="svg-icon" :href="network.url"><img :src="network.path" :alt="network.alt" /></a></li>
          <li class="navbar-item" v-if="index < $store.state.networks.length -1">/</li>
        </template>
      </ul>
      <div class="powered-by">
        <p>Powered by :</p>
        <a class="butter-logo" href="https://buttercms.com/"><img src="@/assets/images/butter-w.png" /></a>
      </div>
      <div>
        © {{ new Date().getFullYear() }} Thomas Blanc
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'common-footer',
  methods: {
    setDurationProperty() {
      let icons = this.$el.querySelectorAll('.svg-icon')
      icons.forEach(function(icon) {
        let rnd = 8 - ((Math.random() * (4)) + -2)
        icon.style.setProperty('--animation-time', rnd + 's')
      })
    }
  },
  mounted() {
    this.setDurationProperty()
  }
}
</script>

<style scoped>

</style>
