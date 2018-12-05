<template>
  <footer class="footer">
    <div class="windows-95">
      <div class="windows-95__title">
        <div class="windows-95__title--pull-right">
          <button class="windows-95__title--minimize"><span class="fa fa-minus"></span></button>
          <button class="windows-95__title--expand"><span class="fa fa-square-o"></span></button>
          <button class="windows-95__title--times"><span class="fa fa-times"></span></button>
        </div>
        <h1><img src="favicon.ico" /> My Computer</h1>
      </div>
      <ul class="windows-95__toolbar">
        <li><u>Y</u>ou</li>
        <li><u>A</u>re</li>
        <li><u>A</u>wesome</li>
      </ul>
      <div class="windows-95__inner">
        <div class="has-text-centered">
          <ul class="inline-list">
            <template v-for="(network, index) in this.$store.state.networks">
              <li :key="index" class="navbar-item"><a class="svg-icon" :href="network.url"><img :src="network.path" :alt="network.alt" /></a></li>
              <li class="navbar-item" v-if="index < $store.state.networks.length -1">/</li>
            </template>
          </ul>
          <div class="footer__powered-by">
            <p>Powered by :</p>
            <a class="butter-logo" href="https://buttercms.com/"><img src="/img/butter-w.png" /></a>
          </div>
        </div>
      </div>
      <div class="windows-95__statusbar">
        <div class="full">&nbsp© {{ new Date().getFullYear() }} Thomas Blanc</div>
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
