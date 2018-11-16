<template>
 <div class="terminal-content">
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
  <div>bjr</div>
 </div>
</template>

<script>
export default {
  name: 'terminal-about',
  methods: {
    appear(speed, cpt = 0) {
      return new Promise((resolve, reject) => {
        if (cpt < this.$el.children.length) {
          this.$el.children[cpt].style.display = 'block'
          setTimeout(() => {
            this.appear(speed, ++cpt).then(resolve)
          }, speed)
        } else {
          resolve()
        }
      })
    }
  },
  mounted() {
    this.appear(500)
  }
}
</script>

<style scoped>
 .terminal-content div {
   display:none
 }
</style>
