<template>
  <header>
    <div class="header">
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
            <p class="header__info__pseudo rgb-shift">- M a c o u t a -</p>
            <p class="header__info__japanese-pseudo">マクタ</p>
            <p class="header__info__catcher">Making stuff, trying to find my way.</p>
          </div>
        </div>
        <div class="windows-95__statusbar">
          <div class="left">3 object(s)</div>
          <div class="right">&nbsp;</div>
        </div>
      </div>
      <div @click="toggleOverlay()" class="open-overlay">
        <span class="open-overlay__bar"></span>
        <span class="open-overlay__bar"></span>
        <span class="open-overlay__bar"></span>
      </div>
    </div>
    <div class="overlay-navigation">
      <nav class="overlay-navigation__nav" role="navigation">
        <ul class="overlay-navigation__list">
          <li @click="toggleOverlay()" class="windows-95-container aesthetic-effect-crt overlay-navigation__item overlay-navigation__item--is-home">
            <router-link class="rgb-shift" to="/" data-content="The beginning">H o m e</router-link>
          </li>
          <li @click="toggleOverlay()" class="windows-95-container aesthetic-effect-crt overlay-navigation__item overlay-navigation__item--is-about">
            <router-link class="rgb-shift" to="/about" data-content="Curious?">A b o u t</router-link>
          </li>
          <li @click="toggleOverlay()" class="windows-95-container aesthetic-effect-crt overlay-navigation__item overlay-navigation__item--is-work">
            <router-link class="rgb-shift" to="/work" data-content="Only the finest">W o r k s</router-link>
          </li>
          <li @click="toggleOverlay()" class="windows-95-container aesthetic-effect-crt overlay-navigation__item overlay-navigation__item--is-blog">
            <router-link class="rgb-shift" to="/blog" data-content="Don't hesitate">B l o g</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import CommonTitle from './common-title'
export default {
  name: 'commom-header',
  components: { CommonTitle },
  methods: {
    toggleOverlay: function() {
      let overlaynavigation = this.$el.querySelector('.overlay-navigation')
      let navitem1 = this.$el.querySelector('.overlay-navigation__item--is-home')
      let navitem2 = this.$el.querySelector('.overlay-navigation__item--is-about')
      let navitem3 = this.$el.querySelector('.overlay-navigation__item--is-work')
      let navitem4 = this.$el.querySelector('.overlay-navigation__item--is-blog')
      let topbar = this.$el.querySelector('.open-overlay__bar:nth-of-type(1)')
      let middlebar = this.$el.querySelector('.open-overlay__bar:nth-of-type(2)')
      let bottombar = this.$el.querySelector('.open-overlay__bar:nth-of-type(3)')

      overlaynavigation.classList.toggle('overlay-active')
      if (overlaynavigation.classList.contains('overlay-active')) {
        topbar.classList.remove('animate-out-top-bar')
        topbar.classList.add('animate-top-bar')
        middlebar.classList.remove('animate-out-middle-bar')
        middlebar.classList.add('animate-middle-bar')
        bottombar.classList.remove('animate-out-bottom-bar')
        bottombar.classList.add('animate-bottom-bar')
        overlaynavigation.classList.remove('overlay-slide-up')
        overlaynavigation.classList.add('overlay-slide-down')
        navitem1.classList.remove('slide-in-nav-item-reverse')
        navitem1.classList.add('slide-in-nav-item')
        navitem2.classList.remove('slide-in-nav-item-delay-1-reverse')
        navitem2.classList.add('slide-in-nav-item-delay-1')
        navitem3.classList.remove('slide-in-nav-item-delay-2-reverse')
        navitem3.classList.add('slide-in-nav-item-delay-2')
        navitem4.classList.remove('slide-in-nav-item-delay-3-reverse')
        navitem4.classList.add('slide-in-nav-item-delay-3')
      } else {
        topbar.classList.remove('animate-top-bar')
        topbar.classList.add('animate-out-top-bar')
        middlebar.classList.remove('animate-middle-bar')
        middlebar.classList.add('animate-out-middle-bar')
        bottombar.classList.remove('animate-bottom-bar')
        bottombar.classList.add('animate-out-bottom-bar')
        overlaynavigation.classList.remove('overlay-slide-down')
        overlaynavigation.classList.add('overlay-slide-up')
        navitem1.classList.remove('slide-in-nav-item')
        navitem1.classList.add('slide-in-nav-item-reverse')
        navitem2.classList.remove('slide-in-nav-item-delay-1')
        navitem2.classList.add('slide-in-nav-item-delay-1-reverse')
        navitem3.classList.remove('slide-in-nav-item-delay-2')
        navitem3.classList.add('slide-in-nav-item-delay-2-reverse')
        navitem4.classList.remove('slide-in-nav-item-delay-3')
        navitem4.classList.add('slide-in-nav-item-delay-3-reverse')
      }
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
