<template>
  <el-image
    class="product"
    :src="image"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
.product {
  position: relative;
  height: 50px;
  width: 50px;
  left: 50%;
  transform: translateX(-50%);

  animation-duration: 2s;
  animation-fill-mode: forwards;

  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadein 2s; /* Firefox < 16 */
      -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
          animation: fadein 2s;
}

@keyframes fadein {
  0% { opacity: 0; bottom: 100% }
  100%   { opacity: 1; bottom: 0%}
}
</style>
