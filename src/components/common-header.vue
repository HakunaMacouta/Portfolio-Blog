<template>
  <header>
    <div class="bg-img">
      <div class="welcome">
        <p>- M a c o u t a -</p>
        <p>マカウタ</p>
        <p>Making stuff, trying to find my way...</p>
      </div>
    </div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" @click="openMenuMobile()" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/blog" class="navbar-item">Blog</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
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
    }
  }
}
</script>
