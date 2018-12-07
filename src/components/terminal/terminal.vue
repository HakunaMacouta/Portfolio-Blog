<template>
 <div class="ui-wrapper">
   <div class="input">
     <div>
       macouta@website $:/<span class="typewriting"></span><span class="blinking-cursor">_</span>
     </div>
     <component v-if="currentEntry" v-bind:is="currentEntryComponent"/>
   </div>
   <ul class="nav">
     <li v-for="(entry, key) in $store.state.entries" @click="entryClicked(entry, key)">
       <span  @mouseover="hovered(entry)">> {{ entry.title }}</span>
     </li>
   </ul>
   <div class="call-to-action">MacoutaOS - <span class="boot-message">Booting...</span></div>
 </div>
</template>

<script>
import about from './terminal-about'
import blog from './terminal-blog'
import portfolio from './terminal-portfolio'
import game from './terminal-game'
import social from './terminal-social'
import credit from './terminal-credit'
export default {
  name: 'terminal',
  components: {
    'terminal-about': about,
    'terminal-blog': blog,
    'terminal-portfolio': portfolio,
    'terminal-game': game,
    'terminal-social': social,
    'terminal-credit': credit
  },
  data: function() {
    return {
      menuDisplayed: true,
      currentEntry: null,
      typewritingCpt: 0
    }
  },
  methods: {
    toggleMenu() {
      this.$el.querySelector('.nav').style.display = this.menuDisplayed ? 'none' : 'block'
      this.menuDisplayed = !this.menuDisplayed
    },
    typewritingEffect: function(selector, string, speed, cpt = 0) {
      return new Promise((resolve, reject) => {
        if (cpt < string.length) {
          this.$el.querySelector(selector).innerHTML += string.charAt(cpt)
          setTimeout(() => {
            this.typewritingEffect(selector, string, speed, ++cpt).then(resolve)
          }, speed)
        } else {
          resolve()
        }
      })
    },
    entryClicked(entry, key) {
      // this.toggleMenu()
      this.$el.querySelector('.typewriting').innerHTML = ''
      this.typewritingEffect('.typewriting', 'run ' + key + '.exe', 200)
        .then(() => {
          this.currentEntry = key
        })
    },
    hovered(entry) {
      this.$emit('entry-hover', entry)
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    currentEntryComponent() {
      return 'terminal-' + this.currentEntry
    }
  },
  watch: {
    loading(newValue) {
      let message = newValue ? 'Booting...' : 'Welcome ! \n Choose your destiny...'
      this.$el.querySelector('.boot-message').innerHTML = ''
      this.typewritingEffect('.boot-message', message, 100)
    }
  }
}
</script>

<style scoped lang="scss">
  $blueShift: rgba(0,30,255,0.5);
  $blueShift: #C487C2;
  //$blueShift: rgba(30,242,241,0.8);
  $redShift: rgba(255,0,80,0.3);
  $redShift: #9efffd;
  //$redShift: rgba(246,5,10,0.8);
  @keyframes textShadow {
    0% {
      text-shadow: 0.4389924193300864px 0 1px $blueShift, -0.4389924193300864px 0 1px $redShift, 0 0 3px;
    }
    5% {
      text-shadow: 2.7928974010788217px 0 1px $blueShift, -2.7928974010788217px 0 1px $redShift, 0 0 3px;
    }
    10% {
      text-shadow: 0.02956275843481219px 0 1px $blueShift, -0.02956275843481219px 0 1px $redShift, 0 0 3px;
    }
    15% {
      text-shadow: 0.40218538552878136px 0 1px $blueShift, -0.40218538552878136px 0 1px $redShift, 0 0 3px;
    }
    20% {
      text-shadow: 3.4794037899852017px 0 1px $blueShift, -3.4794037899852017px 0 1px $redShift, 0 0 3px;
    }
    25% {
      text-shadow: 1.6125630401149584px 0 1px $blueShift, -1.6125630401149584px 0 1px $redShift, 0 0 3px;
    }
    30% {
      text-shadow: 0.7015590085143956px 0 1px $blueShift, -0.7015590085143956px 0 1px $redShift, 0 0 3px;
    }
    35% {
      text-shadow: 3.896914047650351px 0 1px $blueShift, -3.896914047650351px 0 1px $redShift, 0 0 3px;
    }
    40% {
      text-shadow: 3.870905614848819px 0 1px $blueShift, -3.870905614848819px 0 1px $redShift, 0 0 3px;
    }
    45% {
      text-shadow: 2.231056963361899px 0 1px $blueShift, -2.231056963361899px 0 1px $redShift, 0 0 3px;
    }
    50% {
      text-shadow: 0.08084290417898504px 0 1px $blueShift, -0.08084290417898504px 0 1px $redShift, 0 0 3px;
    }
    55% {
      text-shadow: 2.3758461067427543px 0 1px $blueShift, -2.3758461067427543px 0 1px $redShift, 0 0 3px;
    }
    60% {
      text-shadow: 2.202193051050636px 0 1px $blueShift, -2.202193051050636px 0 1px $redShift, 0 0 3px;
    }
    65% {
      text-shadow: 2.8638780614874975px 0 1px $blueShift, -2.8638780614874975px 0 1px $redShift, 0 0 3px;
    }
    70% {
      text-shadow: 0.48874025155497314px 0 1px $blueShift, -0.48874025155497314px 0 1px $redShift, 0 0 3px;
    }
    75% {
      text-shadow: 1.8948491305757957px 0 1px $blueShift, -1.8948491305757957px 0 1px $redShift, 0 0 3px;
    }
    80% {
      text-shadow: 0.0833037308038857px 0 1px $blueShift, -0.0833037308038857px 0 1px $redShift, 0 0 3px;
    }
    85% {
      text-shadow: 0.09769827255241735px 0 1px $blueShift, -0.09769827255241735px 0 1px $redShift, 0 0 3px;
    }
    90% {
      text-shadow: 3.443339761481782px 0 1px $blueShift, -3.443339761481782px 0 1px $redShift, 0 0 3px;
    }
    95% {
      text-shadow: 2.1841838852799786px 0 1px $blueShift, -2.1841838852799786px 0 1px $redShift, 0 0 3px;
    }
    100% {
      text-shadow: 2.6208764473832513px 0 1px $blueShift, -2.6208764473832513px 0 1px $redShift, 0 0 3px;
    }
  }
  .ui-wrapper {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    position: absolute;
    max-height: 100%;
    height: 100vh;
    padding:30px;
    z-index: 1;
    letter-spacing: 1px;
    font-size:18px;
    font-family: 'Welbut', Helvetica, serif;
    & .input { animation: textShadow 5s infinite; }
    & .nav { animation: textShadow 10s infinite; }
    & .call-to-action { animation: textShadow 20s infinite; }
  }
  @keyframes blink {
    0% {
      color: transparent;
    }
    50% {
      color: black;
    }
  }
  .blinking-cursor {
    animation: blink 2s step-end infinite;
  }
  .nav {
    display: block;
    margin:20px 20px;
    list-style: none;
    & li { width: 100%; padding : 20px; cursor: pointer }
    & li span:hover { text-decoration: underline }
  }
</style>
