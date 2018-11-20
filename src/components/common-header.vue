<template>
  <header>
    <div class="bg-img">
      <div class="welcome">
        <p class="rgb-shift">- M a c o u t a -</p>
        <p>マカウタ</p>
        <p>Making stuff, trying to find my way...</p>
      </div>
    </div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a role="button" @click="openMenuMobile()" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">HOME</router-link>
            <div class="navbar-item is-hidden-tablet">/</div>
            <router-link to="/about" class="navbar-item">ABOUT</router-link>
            <div class="navbar-item is-hidden-tablet">/</div>
            <router-link to="/work" class="navbar-item">WORK</router-link>
            <div class="navbar-item is-hidden-tablet">/</div>
            <router-link to="/blog" class="navbar-item">BLOG</router-link>
          </div>
          <div class="navbar-end">
            <template v-for="(network, index) in this.$store.state.networks">
              <div class="navbar-item" :key="index">
                <a class="svg-icon" :href="network.url"><img :src="network.path" :alt="network.alt"/></a>
              </div>
              <div v-if="index < $store.state.networks.length -1" class="navbar-item is-hidden-mobile">/</div>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'commom-header',
  methods: {
    openMenuMobile() {
      this.$el.querySelector('.navbar-menu').classList.toggle('is-active')
      this.$el.querySelector('.navbar-burger').classList.toggle('is-active')
    },
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
