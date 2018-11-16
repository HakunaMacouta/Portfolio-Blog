<template>
  <div>
    <common-header></common-header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CommonHeader from './components/common-header'
export default {
  components: { CommonHeader },
  created: {
  
  }
}
</script>
