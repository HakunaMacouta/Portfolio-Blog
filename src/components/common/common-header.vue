<template>
  <div>
    <header class="header">
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
          <li><u>F</u>ile</li>
          <li><u>E</u>dit</li>
          <li><u>V</u>iew</li>
          <li><u>H</u>elp</li>
        </ul>
        <div class="windows-95__inner">
          <div class="header__info">
            <p class="header__info__pseudo">- M a c o u t a -</p>
            <p class="header__info__japanese-pseudo">マクタ</p>
            <p class="header__info__catcher">Making stuff, trying to find my way.</p>
          </div>
        </div>
        <div class="windows-95__statusbar">
          <div class="left">3 object(s)</div>
          <div class="right">&nbsp;</div>
        </div>
      </div>
    </header>
    <div class="nav-container">
      <div class="container">
        <nav class="nav">
          <router-link to="/" class="nav__item">Home</router-link>
          <router-link to='/about' class="windows-95 nav__item">About</router-link>
          <router-link to="/work" class="windows-95 nav__item">Work</router-link>
          <router-link to="/blog" class="windows-95 nav__item">Blog</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commom-header',
  mounted() {
    window.onscroll = this.toggleScrollHeader
  },
  methods: {
    toggleScrollHeader(event) {
      let navbar = this.$el.querySelector('.nav-container')
      // let sticky = this.findPos(navbar)
      if (window.pageYOffset >= 380) {
        navbar.classList.add('nav-container--sticky')
      } else {
        navbar.classList.remove('nav-container--sticky')
      }
    },
    findPos(obj) {
      let curtop = 0
      if (obj.offsetParent) {
        curtop = obj.offsetTop
        while (obj = obj.offsetParent) {
          curtop += obj.offsetTop
        }
      }
      return curtop
    }
  }
}
</script>
