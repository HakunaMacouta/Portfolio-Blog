<template>
  <article>
  </article>
</template>

<script>
import { helpers } from '@/mixins'
export default {
  name: 'blog-thumb',
  props: ['post'],
  mixins: [ helpers ]
}
</script>
